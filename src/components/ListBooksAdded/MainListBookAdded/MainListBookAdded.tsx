import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ValMapped from "../../../types/ValMappedTypes/ValMappedTypes";
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
const MainListBookAdded: React.FC<MainListBookAddedTypes> = ({
  lastItem,
  handleModify,
  handleDelete,
}) => {
  const books = useSelector((state: any) => state.books.books);

  return (
    <>
      {books && books.length > 0 ? (
        books.map((val: ValMapped, index: number) => {
          console.log("val", val);
          return (
            <div key={index}>
              <Header
                className={
                  index > 0 ? "borderTopRightRadius" : "borderTopLeftRadius"
                }
              >
                <NameHeaderText>{val.name}</NameHeaderText>
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
                    src={String(val.img)}
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
