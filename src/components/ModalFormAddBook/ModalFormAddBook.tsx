import ModalProps from "../../types/ModalTypes/ModalTypes";
import MainModalForm from "../MainModalForm/MainModalForm";
import { Modal, ModalContent } from "./ModalFormAddBookStyle";
import { useSelector } from "react-redux";
const ModalFormAddBook: React.FC<ModalProps> = ({
  checkModify,
  handleClose,
  setCheckModify,
  book,
  idBookToModify,
  setBook,
}) => {
  const checkerModal = useSelector((state: any) => state.books.modalChecker);

  return (
    <div>
      {checkerModal ? (
        <Modal className={"fade"}>
          <ModalContent>
            <MainModalForm
              setBook={setBook}
              book={book}
              idBookToModify={idBookToModify}
              checkModify={checkModify}
              setCheckModify={setCheckModify}
              handleClose={handleClose}
            />
          </ModalContent>
        </Modal>
      ) : null}
    </div>
  );
};

export default ModalFormAddBook;
