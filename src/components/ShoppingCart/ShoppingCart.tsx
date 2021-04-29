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
  ContainerButtonRemoveAll,
  ContainerIcon,
  Button,
  ImageList,
  WrapperList,
  WrapperItem,
  SepareteLine,
} from "./ShoppingCartStyle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { updateQuantityValueOnBooks } from "../../asyncCallThunkToolkit/BooksAdded/updateQuantityValueOnBooks";
import { Obj } from "../MainModalForm/MainModalForm";
import { updateQuantityBooks } from "../../asyncCallThunkToolkit/Books/updateQuantityBooks";
import { getBooks } from "../../asyncCallThunkToolkit/Books/getBooks";
import { ImgMapList } from "../ListBooksAdded/MainListBookAdded/MainListBookAddedStyle";

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

  // this func find the book with same id of the book u want to add quantity
  // create a new objecet spredding the
  const handleAddQuantity = (val: Obj) => {
    const findBook: Obj = books.find((bookFromStore: Obj) => {
      return bookFromStore.id === val.id;
    });

    if (val.quantity < findBook.disponibility) {
      const valAddToCartHandleQuantity = {
        ...val,
        quantity: val.quantity + 1,
      };

      dispatch(updateQuantityValueOnBooks(valAddToCartHandleQuantity));
    }

    if (findBook.quantity > 0) {
      const bookWithQuantity: Obj = {
        ...findBook,
        quantity: findBook.quantity - 1,
      };
      dispatch(updateQuantityBooks(bookWithQuantity));
    }
  };

  const handleRemoveAllBooks = () => {
    bookFromCart.forEach((element: Obj) => {
      dispatch(updateQuantityBooks(element));
      dispatch(deleteBooksToCart(element.id));
    });

    if (bookFromCart.length === 1) hisotry.push("/");
  };

  return (
    <div
      style={{
        backgroundColor: "#EAEDED",
        height: "100%",
        padding: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: "20px",
          maxWidth: "75%",
          margin: "10px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "30px",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            carrello
          </span>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>prezzo</span>
          </div>
          <div
            style={{
              height: "1px",
              backgroundColor: "gray",
            }}
          ></div>
        </div>
        {bookFromCart &&
          bookFromCart.map((val: Obj, index: number) => {
            return (
              <div key={index}>
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ImgMapList
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src =
                        "https://pngimg.com/uploads/book/book_PNG51090.png";
                    }}
                    src={String()}
                  />
                  <div
                    style={{
                      color: "green",
                      padding: "5px",
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <div> {val.name} </div>
                    <div> disponibilità immediata </div>
                    <div> {val.gender} </div>
                    <div> {val.author} </div>
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
                      <div
                        style={{
                          minWidth: "1px",
                          backgroundColor: "gray",
                          minHeight: "18px",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      ></div>
                      <Button onClick={() => handleDeleteBook(val)}>
                        Remove
                      </Button>
                    </ContainerIcon>
                  </div>
                  <div>
                    <Button onClick={handleRemoveAllBooks}>
                      remove all books in the cart
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    // <WrapperShoppingCartComponent>
    //   <h1>Carello</h1>
    //   <SepareteLine />
    //   {bookFromCart &&
    //     bookFromCart.map((book: Obj) => {
    //       return (
    //         <WrapperList>
    //           <WrapperItem>
    //             <ImgMapList
    //               onError={(
    //                 e: React.SyntheticEvent<HTMLImageElement, Event>
    //               ) => {
    //                 e.currentTarget.src =
    //                   "https://pngimg.com/uploads/book/book_PNG51090.png";
    //               }}
    //               src={String(book.img)}
    //             ></ImgMapList>
    //           </WrapperItem>
    //         </WrapperList>
    //       );
    //     })}
    // </WrapperShoppingCartComponent>
    // <WrapperShoppingCartComponent>
    //   <ContainerTitle>
    //     <h1>SHOPPING CART</h1>
    //   </ContainerTitle>
    //   <ContainerButtonRemoveAll>
    //     <Button onClick={handleRemoveAllBooks}>
    //       remove all books in the cart
    //     </Button>
    //   </ContainerButtonRemoveAll>

    //   {bookFromCart &&
    //     bookFromCart.map((val: any, index: number) => {
    //       return (
    //         <ContainerItemCart key={index}>
    //           <div> {val?.name?} </div>

    //           <ContainerIcon>
    //             <div onClick={() => handleAddQuantity(val)}>
    //               <AddCircleIcon />
    //             </div>
    //             <div> {val?.quantity} </div>
    //             <div onClick={() => handleDeleteItemFromShoppingCart(val)}>
    //               <RemoveCircleIcon />
    //             </div>
    //           </ContainerIcon>
    //           <Button onClick={() => handleDeleteBook(val)}>
    //             remove from cart
    //           </Button>
    //         </ContainerItemCart>
    //       );
    //     })}
    //   <WrapperPrice>
    //     <h1>prezzo : </h1>
    //   </WrapperPrice>
    // </WrapperShoppingCartComponent>
  );
}

export default ShoppingCart;
