import { useEffect } from "react";
import {
  WrapperHeader,
  ContainerIconCart,
  WrapperWidgetCounter,
  WrapperDropDown,
  ContainerButton,
  DropDownContentWrapper,
  Button,
  ContainerImg,
} from "./HeaderStyle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Obj } from "../MainModalForm/MainModalForm";
import { ImgMapList } from "../ListBooksAdded/MainListBookAdded/MainListBookAddedStyle";
import { useHistory } from "react-router-dom";
import { getBooksAddedToCart } from "../../asyncCallThunkToolkit/BooksAdded/getBooksAddedToCart";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const handleOverCart = () => {
    setShowDropDown(true);
  };

  const history = useHistory();

  const store = useSelector((state: any) => state.books.books.length);

  const dispatch = useDispatch();

  const books = useSelector(
    (state: any) => state.booksAddedToCart.booksAddedToCart
  );

  const length: number = books.length;

  const location = useLocation();

  useEffect(() => {
    dispatch(getBooksAddedToCart());
  }, [dispatch]);

  const handleOutCart = () => {
    setShowDropDown(false);
  };

  return (
    <WrapperHeader onMouseLeave={handleOutCart}>
      <ContainerIconCart onMouseOver={handleOverCart}>
        <WrapperWidgetCounter>{length}</WrapperWidgetCounter>
        <ShoppingCartIcon fontSize="large" />
      </ContainerIconCart>
      {showDropDown && length > 0 ? (
        <WrapperDropDown onMouseLeave={handleOutCart}>
          {books.map((val: Obj, index: number) => {
            if (index < 3) {
              return (
                <DropDownContentWrapper key={index}>
                  <ContainerImg>
                    <ImgMapList
                      className="imgCart"
                      alt="dio cane"
                      onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>
                      ) => {
                        e.currentTarget.src =
                          "https://pngimg.com/uploads/book/book_PNG51090.png";
                      }}
                      src={String(val.img)}
                    />
                  </ContainerImg>
                  <div> {val.name} </div>
                </DropDownContentWrapper>
              );
            }
          })}
          {location.pathname !== "/shoppingCart" ? (
            <ContainerButton onClick={() => history.push("/shoppingCart")}>
              <Button>view more...</Button>
            </ContainerButton>
          ) : null}
        </WrapperDropDown>
      ) : null}
    </WrapperHeader>
  );
};

export default Header;
