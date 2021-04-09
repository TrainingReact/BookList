import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/deleteBooksToCart";
import { getBooksAddedToCart } from "../../asyncCallThunkToolkit/BooksAdded/getBooksAddedToCart";
import { useHistory } from "react-router-dom";
import {
  WrapperShoppingCartComponent,
  ContainerTitle,
  WrapperPrice,
  ContainerItemCart,
} from "./ShoppingCartStyle";
function ShoppingCart() {
  const store = useSelector(
    (state: any) => state.booksAddedToCart.booksAddedToCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAddedToCart());
  }, [dispatch]);

  const hisotry = useHistory();

  const handleDeleteItemFromShoppingCart = (id: number) => {
    dispatch(deleteBooksToCart(id));
    if (store.length === 1) hisotry.push("/");
  };

  return (
    <WrapperShoppingCartComponent>
      <ContainerTitle>
        <h1>SHOPPING CART</h1>
      </ContainerTitle>
      {store &&
        store.map((val: any, index: number) => {
          return (
            <ContainerItemCart key={index}>
              <div> {val?.name?.value} </div>
              <div> {val?.quantity} </div>
              <div>
                <button
                  onClick={() => handleDeleteItemFromShoppingCart(val.id)}
                >
                  remove from cart
                </button>
              </div>
            </ContainerItemCart>
          );
        })}
      <WrapperPrice>
        <h1>prezzo : </h1>
      </WrapperPrice>
    </WrapperShoppingCartComponent>
  );
}

export default ShoppingCart;
