import { Book } from "../../types/Book/Book";

export interface BookState {
  books: Book[];
  modalChecker: boolean;
  modalCheckerModify: boolean;
  status: string;
}
