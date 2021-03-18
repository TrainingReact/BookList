import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ValMapped from "../../../types/ValMappedTypes/ValMappedTypes";
import LabelListBookField from "./LabelListBookField/LabelListBookField";
import MainListBookAddedTypes from "../../../types/ListBookAddedTypes/ListBookAddedTypes";
import {
  Header,
  ContItemMapFlex,
  ContItemMapFlexIcon,
  WrapperItem,
  ContImg,
} from "./MainListBookAddedStyle";

const MainListBookAdded: React.FC<MainListBookAddedTypes> = ({
  store,
  lastItem,
  handleModify,
  handleDelete,
}) => {
  return (
    <>
      {store && store.length > 0 ? (
        store.map((val: ValMapped, index: number) => {
          return (
            <div key={index}>
              <Header
              // style={{
              //   borderTopRightRadius: index > 0 ? "0px" : "20px",
              //   borderTopLeftRadius: index > 0 ? "0px" : "20px",
              // }}
              >
                <div className="name-header-text">{val.name.value}</div>
              </Header>
              <WrapperItem
              // style={{
              //   borderBottomLeftRadius: lastItem === index + 1 ? "20px" : "",
              //   borderBottomRightRadius: lastItem === index + 1 ? "20px" : "",
              // }}
              >
                <ContImg className="cont-img">
                  <img
                    alt="err"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      e.currentTarget.src =
                        "https://pngimg.com/uploads/book/book_PNG51090.png";
                    }}
                    className="img-map-list"
                    src={val.img.value}
                  />
                </ContImg>

                <LabelListBookField val={val} label="author" />

                <LabelListBookField val={val} label="gender" />

                <ContItemMapFlexIcon>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleModify(val.id)}
                  >
                    <CreateIcon />
                  </div>
                  <div
                    className="cursor-pointer-delete"
                    onClick={() => handleDelete(val && val.id)}
                  >
                    <DeleteIcon />
                  </div>
                </ContItemMapFlexIcon>
              </WrapperItem>
            </div>
          );
        })
      ) : (
        <div className="add-book-span">
          <div>add a book!</div>
        </div>
      )}
    </>
  );
};

export default MainListBookAdded;
