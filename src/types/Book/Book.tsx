import Field from "../FieldTypes/FieldTypes";
export interface Book {
  id: number;
  name: Field | string;
  author: Field | string;
  gender: Field | string;
  img: Field | string;
  quantity: number;
  disponibility?: number;
}
