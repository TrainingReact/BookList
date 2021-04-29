import React from "react";
import InputTypes from "../../types/InputTypes/InputTypes";
import { InputModal, Label, TextError } from "./InputStyle";
const Input: React.FC<InputTypes> = ({
  handleType,
  val,
  error,
  placeholder,
  label,
  name,
  type,
}) => {
  return (
    <>
      <div>
        <Label>{label}</Label>
      </div>
      <InputModal
        required
        placeholder={placeholder}
        value={name === "quantity" ? Number(val) : String(val)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleType(e)}
        name={name}
        type={type}
      />

      <div>
        <TextError> {name === "quantity" ? null : error}</TextError>
      </div>
    </>
  );
};

export default Input;
