import ButtonTypes from "../../types/ButtonModifyTypes/ButtonModifyTypes";
import Container, { ButtonSaveBook } from "./ButtonModifyStyle";
import { useSelector } from "react-redux";
const ButtonSubmit: React.FC<ButtonTypes> = ({ handleAddBook }) => {
  const checkModify = useSelector(
    (state: any) => state.books.modalCheckerModify
  );

  return (
    <Container>
      <ButtonSaveBook onClick={handleAddBook}>
        {checkModify ? "modify" : "save"}
      </ButtonSaveBook>
    </Container>
  );
};

export default ButtonSubmit;
