import getKeys from "../utils/getKeysFunc";
import { objKeys } from "../types/objKeysTypes/objKeysType";
import { Obj } from "../components/MainModalForm/MainModalForm";

const clearAllField = (
  book: Obj,
  setBook: React.Dispatch<React.SetStateAction<Obj>>
) => {
  getKeys(book).map((val: objKeys) => {
    if (val !== "id") {
      const isQuantity = val === "quantity";
      setBook((prevState: any) => ({
        ...prevState,
        [val]: {
          value: isQuantity ? 1 : "",
          error: book[val].error,
        },
      }));
    }
  });
};

export default clearAllField;
