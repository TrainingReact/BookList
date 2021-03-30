import {
  WrapperHeader,
  ContainerIconCart,
  WrapperWidgetCounter,
  WrapperDropDown,
  DropDownContentWrapper,
} from "./HeaderStyle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Obj } from "../MainModalForm/MainModalForm";
import { ImgMapList } from "../ListBooksAdded/MainListBookAdded/MainListBookAddedStyle";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const handleOverCart = () => {
    setShowDropDown(true);
  };

  const store = useSelector((state: any) => state.books.books.length);

  const books = useSelector((state: any) => state.books.books);

  const handleOutCart = () => {
    // setShowDropDown(false);
  };

  return (
    <WrapperHeader>
      <ContainerIconCart>
        <WrapperWidgetCounter>{store}</WrapperWidgetCounter>
        <ShoppingCartIcon onMouseOver={handleOverCart} fontSize="large" />
      </ContainerIconCart>
      {showDropDown ? (
        <WrapperDropDown onMouseOut={handleOutCart}>
          <div>
            {books.map((val: Obj, index: number) => {
              return (
                <DropDownContentWrapper key={index}>
                  <ImgMapList
                    className="imgCart"
                    alt="dio cane"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src =
                        "https://pngimg.com/uploads/book/book_PNG51090.png";
                    }}
                    src={String(val.img.value)}
                  />
                  <div> {val.name.value} </div>
                </DropDownContentWrapper>
              );
            })}
          </div>
        </WrapperDropDown>
      ) : null}
    </WrapperHeader>
  );
};

export default Header;
