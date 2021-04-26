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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { updateQuantityValueOnBooks } from "../../asyncCallThunkToolkit/BooksAdded/updateQuantityValueOnBooks";
import { Obj } from "../MainModalForm/MainModalForm";
import { updateQuantityBooks } from "../../asyncCallThunkToolkit/Books/updateQuantityBooks";
import { getBooks } from "../../asyncCallThunkToolkit/Books/getBooks";

function ShoppingCart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAddedToCart());
    dispatch(getBooks());
  }, [dispatch]);

  const bookFromCart = useSelector(
    (state: any) => state.booksAddedToCart.booksAddedToCart
  );

  const books = useSelector((state: any) => state.books.books);

  const hisotry = useHistory();

  const handleDeleteItemFromShoppingCart = (val: Obj) => {
    if (val.quantity > 1) {
      const valRemoveToCartHandleQuantity = {
        ...val,
        quantity: val.quantity - 1,
      };

      const findBook: Obj = books.find((bookFromStore: Obj) => {
        return bookFromStore.id === val.id;
      });

      const bookWithQuantityAdded: Obj = {
        ...findBook,
        quantity: findBook.quantity + 1,
      };

      dispatch(updateQuantityBooks(bookWithQuantityAdded));

      dispatch(updateQuantityValueOnBooks(valRemoveToCartHandleQuantity));
    } else {
      const findBook: Obj = books.find((bookFromStore: Obj) => {
        return bookFromStore.id === val.id;
      });
      const bookWithQuantityAdded: Obj = {
        ...findBook,
        quantity: findBook.quantity + 1,
      };
      dispatch(updateQuantityBooks(bookWithQuantityAdded));
      dispatch(deleteBooksToCart(val.id));
      if (bookFromCart.length === 1) hisotry.push("/");
    }
  };

  const handleDeleteBook = (bookClicked: Obj) => {
    const findBook: Obj = books.find((book: Obj) => {
      return book.id === bookClicked.id;
    });

    const updateQuantity: Obj = {
      ...findBook,
      quantity: findBook.quantity + bookClicked.quantity,
    };

    dispatch(updateQuantityBooks(updateQuantity));
    dispatch(deleteBooksToCart(bookClicked.id));
    if (bookFromCart.length === 1) hisotry.push("/");
  };

  const handleAddQuantity = (val: Obj) => {
    const findBook: Obj = books.find((bookFromStore: Obj) => {
      return bookFromStore.id === val.id;
    });

    const valAddToCartHandleQuantity = {
      ...val,
      quantity: val.quantity + 1,
    };

    console.log(findBook.quantity);

    if (findBook.quantity !== 0) {
      dispatch(updateQuantityValueOnBooks(valAddToCartHandleQuantity));
    }

    if (findBook.quantity > 0) {
      const bookWithQuantity: Obj = {
        ...findBook,
        quantity: findBook.quantity - 1,
      };
      updateQuantityBooks(bookWithQuantity);
    }
  };

  const handleRemoveAllBooks = () => {
    bookFromCart.forEach((element: Obj) => {
      dispatch(updateQuantityBooks(element));
      dispatch(deleteBooksToCart(element.id));
    });
  };

  return (
    <WrapperShoppingCartComponent>
      <ContainerTitle>
        <h1>SHOPPING CART</h1>
      </ContainerTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px",
        }}
      >
        <button onClick={handleRemoveAllBooks} style={{ color: "red" }}>
          remove all books in the cart
        </button>
      </div>

      {bookFromCart &&
        bookFromCart.map((val: any, index: number) => {
          return (
            <ContainerItemCart key={index}>
              <div> {val?.name?.value} </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100px",
                }}
              >
                <div onClick={() => handleAddQuantity(val)}>
                  <AddCircleIcon />
                </div>
                <div> {val?.quantity} </div>
                <div onClick={() => handleDeleteItemFromShoppingCart(val)}>
                  <RemoveCircleIcon />
                </div>
              </div>
              <button onClick={() => handleDeleteBook(val)}>
                remove from cart
              </button>
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
