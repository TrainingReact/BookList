import ModalProps from "../../types/ModalTypes/ModalTypes";
import MainModalForm from "./MainModalForm/MainModalForm";
import { Modal, ModalContent } from "./ModalFormAddBookStyle";
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
        <Modal className={"fade"}>
          <ModalContent>
            <MainModalForm
              setBook={setBook}
              book={book}
              idBookToModify={idBookToModify}
              checkModify={checkModify}
              setCheckModify={setCheckModify}
              handleClose={handleClose}
              setCheckClicked={setCheckClicked}
            />
          </ModalContent>
        </Modal>
      ) : null}
    </div>
  );
};

export default ModalFormAddBook;
