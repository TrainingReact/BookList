import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/deleteBooksToCart";
import { getBooksAddedToCart } from "../../asyncCallThunkToolkit/BooksAdded/getBooksAddedToCart";
import { useHistory } from "react-router-dom";
import { updateQuantityValueOnBooks } from "../../asyncCallThunkToolkit/BooksAdded/updateQuantityValueOnBooks";
import { Obj } from "../MainModalForm/MainModalForm";
import { updateQuantityBooks } from "../../asyncCallThunkToolkit/Books/updateQuantityBooks";
import { getBooks } from "../../asyncCallThunkToolkit/Books/getBooks";
import ShoppingCartJsx from "../ShoppingCartJsx/ShoppingCartJsx";
import findFunction from "../../utils/findFunction";
import SpreadToDispatch from "../../utils/spreadToDispatch";

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
      const valRemoveToCartHandleQuantity = SpreadToDispatch(
        val,
        "quantity",
        val.quantity - 1
      );

      const findBook = findFunction(books, val.id);

      const bookWithQuantityAdded = SpreadToDispatch(
        findBook,
        "quantity",
        findBook.quantity + 1
      );

      dispatch(updateQuantityBooks(bookWithQuantityAdded));

      dispatch(updateQuantityValueOnBooks(valRemoveToCartHandleQuantity));
    } else {
      const findBook = findFunction(books, val.id);

      const bookWithQuantityAdded = SpreadToDispatch(
        findBook,
        "quantity",
        findBook.quantity + 1
      );

      dispatch(updateQuantityBooks(bookWithQuantityAdded));
      dispatch(deleteBooksToCart(val.id));
      if (bookFromCart.length === 1) hisotry.push("/");
    }
  };

  const handleDeleteBook = (bookClicked: Obj) => {
    const findBook = findFunction(books, bookClicked.id);

    const updateQuantity = SpreadToDispatch(
      findBook,
      "quantity",
      findBook.quantity + bookClicked.quantity
    );

    dispatch(updateQuantityBooks(updateQuantity));
    dispatch(deleteBooksToCart(bookClicked.id));
    if (bookFromCart.length === 1) hisotry.push("/");
  };

  // this func find the book with same id of the book u want to add quantity
  // create a new objecet spredding the

  const handleAddQuantity = (val: Obj) => {
    const findBook: Obj = findFunction(books, val.id);

    if (val.quantity < findBook.disponibility) {
      const valAddToCartHandleQuantity = SpreadToDispatch(
        val,
        "quantity",
        val.quantity + 1
      );

      dispatch(updateQuantityValueOnBooks(valAddToCartHandleQuantity));
    }

    if (findBook.quantity > 0) {
      const bookWithQuantity = SpreadToDispatch(
        findBook,
        "quantity",
        findBook.quantity - 1
      );

      dispatch(updateQuantityBooks(bookWithQuantity));
    }
  };

  const handleRemoveAllBooks = () => {
    bookFromCart.forEach((element: Obj) => {
      dispatch(updateQuantityBooks(element));
      dispatch(deleteBooksToCart(element.id));
    });
    hisotry.push("/");
  };

  return (
    <ShoppingCartJsx
      handleDeleteBook={handleDeleteBook}
      handleDeleteItemFromShoppingCart={handleDeleteItemFromShoppingCart}
      handleRemoveAllBooks={handleRemoveAllBooks}
      handleAddQuantity={handleAddQuantity}
    />
  );
}

export default ShoppingCart;
