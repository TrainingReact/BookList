import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import LabelListBookField from "./LabelListBookField/LabelListBookField";
import MainListBookAddedTypes from "../../../types/ListBookAddedTypes/ListBookAddedTypes";
import {
  Header,
  NameHeaderText,
  ContItemMapFlexIcon,
  WrapperItem,
  ContImg,
  ImgMapList,
  CursorPointer,
  CursorPointerDelete,
  AddBookSpan,
} from "./MainListBookAddedStyle";
import { useSelector } from "react-redux";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { useDispatch } from "react-redux";
import { addBooksToCart } from "../../../asyncCallThunkToolkit/BooksAdded/addBooksToCart";
import { updateQuantityValueOnBooks } from "../../../asyncCallThunkToolkit/BooksAdded/updateQuantityValueOnBooks";
import { Obj } from "../../MainModalForm/MainModalForm";
import { updateQuantityBooks } from "../../../asyncCallThunkToolkit/Books/updateQuantityBooks";
import findFunction from "../../../utils/findFunction";
import spreadToDispatch from "../../../utils/spreadToDispatch";

const MainListBookAdded: React.FC<MainListBookAddedTypes> = ({
  lastItem,
  handleModify,
  handleDelete,
}) => {
  const booksFromStore = useSelector((state: any) => state.books.books);

  const booksAdded = useSelector(
    (state: any) => state.booksAddedToCart.booksAddedToCart
  );

  const dispatch = useDispatch();

  const handleAddBookToCart = (id: number) => {
    let bookToAddOnTheCart: Obj = findFunction(booksFromStore, id);

    const result: Obj = findFunction(booksAdded, id);

    if (result === undefined) {
      const newOne = spreadToDispatch(bookToAddOnTheCart, "quantity", 1);

      const newUpdateQuantityBeforeFirstBook = spreadToDispatch(
        bookToAddOnTheCart,
        "quantity",
        bookToAddOnTheCart.quantity - 1
      );

      dispatch(updateQuantityBooks(newUpdateQuantityBeforeFirstBook));
      dispatch(addBooksToCart(newOne));
    } else {
      const boostQuantity = spreadToDispatch(
        result,
        "quantity",
        result.quantity + 1
      );

      const newUpdateQuantity = spreadToDispatch(
        bookToAddOnTheCart,
        "quantity",
        bookToAddOnTheCart.quantity - 1
      );

      if (newUpdateQuantity.quantity > -1)
        dispatch(updateQuantityValueOnBooks(boostQuantity));

      if (newUpdateQuantity.quantity > -1) {
        dispatch(updateQuantityBooks(newUpdateQuantity));
      }
    }
  };

  return (
    <>
      {booksFromStore && booksFromStore.length > 0 ? (
        booksFromStore.map((val: any, index: number) => {
          return (
            <div key={index}>
              <Header
                className={
                  index > 0 ? "borderTopRightRadius" : "borderTopLeftRadius"
                }
              >
                <NameHeaderText>
                  {val?.name?.value ? val?.name?.value : val.name}
                </NameHeaderText>
              </Header>
              <WrapperItem
                className={
                  lastItem === index + 1
                    ? "borderBottomLeftRadius"
                    : "borderBottomRightRadius"
                }
              >
                <ContImg>
                  <ImgMapList
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src =
                        "https://pngimg.com/uploads/book/book_PNG51090.png";
                    }}
                    src={String(val?.img?.value ? val?.img?.value : val.img)}
                  />
                </ContImg>

                <LabelListBookField
                  val={val?.author?.value ? val?.author?.value : val.author}
                  label="author"
                />

                <LabelListBookField
                  val={val?.gender?.value ? val?.gender?.value : val.gender}
                  label="gender"
                />

                <LabelListBookField
                  val={
                    val?.quantity?.value ? val?.quantity?.value : val.quantity
                  }
                  label="quantity"
                />

                <ContItemMapFlexIcon>
                  <CursorPointer onClick={() => handleModify(val.id)}>
                    <CreateIcon />
                  </CursorPointer>
                  <CursorPointerDelete
                    onClick={() => handleDelete(val && val.id)}
                  >
                    <DeleteIcon />
                  </CursorPointerDelete>
                </ContItemMapFlexIcon>

                <AddCircleRoundedIcon
                  onClick={() => handleAddBookToCart(val.id)}
                  fontSize="large"
                  color="primary"
                />
              </WrapperItem>
            </div>
          );
        })
      ) : (
        <AddBookSpan>
          <div>add a book!</div>
        </AddBookSpan>
      )}
    </>
  );
};

export default MainListBookAdded;
