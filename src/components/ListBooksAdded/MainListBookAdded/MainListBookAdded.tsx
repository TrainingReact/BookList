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

const MainListBookAdded: React.FC<MainListBookAddedTypes> = ({
  lastItem,
  handleModify,
  handleDelete,
}) => {
  const booksFromStore = useSelector((state: any) => state.books.books);

  const handleAddBookToCart = (id: number) => {
    let bookToAddToTheCart: string = "";

    booksFromStore.find((val: any) =>
      val.id === id ? (bookToAddToTheCart = val) : null
    );
    console.log("who u are ? ", bookToAddToTheCart);
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
                <NameHeaderText>{val?.name?.value}</NameHeaderText>
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
                    src={String(val?.img?.value)}
                  />
                </ContImg>

                <LabelListBookField val={val} label="author" />

                <LabelListBookField val={val} label="gender" />

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
                  style={{ cursor: "pointer" }}
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
