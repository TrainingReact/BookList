import { Obj } from "../../components/MainModalForm/MainModalForm";

export type ShoppingCartJsxTypes = {
  handleAddQuantity: (val: Obj) => void;
  handleRemoveAllBooks: () => void;
  handleDeleteItemFromShoppingCart: (val: Obj) => void;
  handleDeleteBook: (val: Obj) => void;
};
