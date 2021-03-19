import { objKeys } from "../types/objKeysTypes/objKeysType";
import { getKeyFunc } from "../types/getKeyFunc/getKeyFunc";
import { Obj } from "../components/MainModalForm/MainModalForm";

const getKeys: getKeyFunc<Obj, objKeys> = (book) =>
  Object.keys(book) as objKeys[];

export default getKeys;
