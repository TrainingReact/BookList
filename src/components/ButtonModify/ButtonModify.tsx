import ButtonTypes from "../../types/ButtonModifyTypes/ButtonModifyTypes";
import Container, { ButtonSaveBook } from "./ButtonModifyStyle";

const ButtonSubmit: React.FC<ButtonTypes> = ({
  checkModify,
  handleAddBook,
}) => {
  return (
    <Container>
      <ButtonSaveBook onClick={handleAddBook}>
        {checkModify ? "modify" : "save"}
      </ButtonSaveBook>
    </Container>
  );
};

export default ButtonSubmit;
