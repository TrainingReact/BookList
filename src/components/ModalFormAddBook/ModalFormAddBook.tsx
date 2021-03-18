import ModalProps from "../../types/ModalTypes/ModalTypes";
import MainModalForm from "./MainModalForm/MainModalForm";
import "./ModalFormAddBook.css";
const ModalFormAddBook: React.FC<ModalProps> = ({
  checkClicked,
  setCheckClicked,
  checkModify,
  handleClose,
  setCheckModify,
  book,
  idBookToModify,
  setBook,
}) => {
  return (
    <div>
      {checkClicked ? (
        <div className="modal fade-in">
          <div className="modal-content">
            <MainModalForm
              setBook={setBook}
              book={book}
              idBookToModify={idBookToModify}
              checkModify={checkModify}
              setCheckModify={setCheckModify}
              handleClose={handleClose}
              setCheckClicked={setCheckClicked}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalFormAddBook;
