import Field from "../FieldTypes/FieldTypes";

export interface BookAddedToCartFieldTypes {
  id: number;
  name: Field;
  author: Field;
  gender: Field;
  img: Field;
  quantity: number;
}
