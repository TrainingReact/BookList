import React from "react";
import ModalJsxTypes from "../../../../types/ModalJsxTypes/ModalJsxTypes";
import "./ModalJsx.css";
import { useSelector } from "react-redux";
import Input from "../../../../components/Input/Input";
import LabelSwitch from "../../../LabelSwitch/LabelSwitch";
import ButtonSubmit from "../../../ButtonModify/ButtonModify";
const ModalJsx: React.FC<ModalJsxTypes> = ({
  book,
  handleAddBook,
  handleType,
  handleClose,
  checkModify,
  setToggle,
  toggle,
}) => {
  const state: any = useSelector((state: any) => state.books.books);
  return (
    <>
      <div className="cont-item-span">
        <span onClick={handleClose} className="close">
          &times;
        </span>
      </div>

      {!checkModify ? (
        <LabelSwitch setToggle={setToggle} toggle={toggle} />
      ) : null}

      <div className="wrapper-form">
        <div className="direction-column">
          <Input
            label="name"
            name="name"
            placeholder="name"
            error={book.name.error}
            val={book.name.value}
            handleType={handleType}
          />
        </div>
        <div className="direction-column">
          <Input
            label="author"
            name="author"
            placeholder="author"
            error={book.author.error}
            val={book.author.value}
            handleType={handleType}
          />
        </div>
        <div className="direction-column">
          <Input
            label="gender"
            name="gender"
            placeholder="gender"
            error={book.gender.error}
            val={book.gender.value}
            handleType={handleType}
          />
        </div>
        <div className="direction-column">
          <Input
            label="img"
            name="img"
            placeholder="img"
            error={book.img.error}
            val={book.img.value}
            handleType={handleType}
          />
          <div className="cont-img">
            <img
              alt="err"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBoJ-u5is_IuOgE2wj18XdIB94tsYhy6V-Q&usqp=CAU";
              }}
              className="img-size"
              src={book.img.value}
            />
          </div>
        </div>
      </div>

      <ButtonSubmit checkModify={checkModify} handleAddBook={handleAddBook} />
    </>
  );
};

export default ModalJsx;
