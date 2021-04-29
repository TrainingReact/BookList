import {
  WrapperShoppingCartComponent,
  ContainerIcon,
  Button,
  WrapperList,
  SeparateProductLine,
  SepareteLine,
  CardShoppingCart,
  DescriptionProduct,
  PriceContainer,
  SpanText,
  ContainerTitle,
} from "../ShoppingCart/ShoppingCartStyle";
import { ImgMapList } from "../ListBooksAdded/MainListBookAdded/MainListBookAddedStyle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useSelector } from "react-redux";
import { Obj } from "../MainModalForm/MainModalForm";
import { ShoppingCartJsxTypes } from "../../types/ShoppingCartJsxTypes/ShoppingCartJsxTypes";
const ShoppingCartJsx: React.FC<ShoppingCartJsxTypes> = ({
  handleAddQuantity,
  handleRemoveAllBooks,
  handleDeleteItemFromShoppingCart,
  handleDeleteBook,
}) => {
  const bookFromCart = useSelector(
    (state: any) => state.booksAddedToCart.booksAddedToCart
  );

  return (
    <WrapperShoppingCartComponent>
      <CardShoppingCart>
        <div>
          <SpanText>carrello</SpanText>
          <PriceContainer>
            <span>prezzo</span>
          </PriceContainer>
          <Button onClick={handleRemoveAllBooks}>
            remove all books in the cart
          </Button>
          <SepareteLine />
        </div>
        {bookFromCart &&
          bookFromCart.map((val: Obj, index: number) => {
            return (
              <div key={index}>
                <WrapperList>
                  <ImgMapList
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src =
                        "https://pngimg.com/uploads/book/book_PNG51090.png";
                    }}
                    src={String()}
                  />
                  <DescriptionProduct>
                    <ContainerTitle>name : {val.name} </ContainerTitle>
                    <div> disponibilità immediata </div>
                    <div>genere : {val.gender} </div>
                    <div>author {val.author} </div>
                    <ContainerIcon>
                      <div onClick={() => handleAddQuantity(val)}>
                        <AddCircleIcon />
                      </div>
                      <div> {val?.quantity} </div>
                      <div
                        onClick={() => handleDeleteItemFromShoppingCart(val)}
                      >
                        <RemoveCircleIcon />
                      </div>
                      <SeparateProductLine />
                      <Button onClick={() => handleDeleteBook(val)}>
                        Remove
                      </Button>
                    </ContainerIcon>
                  </DescriptionProduct>
                  <div></div>
                </WrapperList>
                <SepareteLine />
              </div>
            );
          })}
      </CardShoppingCart>
    </WrapperShoppingCartComponent>
  );
};

export default ShoppingCartJsx;
