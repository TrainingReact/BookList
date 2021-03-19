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
}) => {
  return (
    <>
      <div>
        <Label className="label">{label}</Label>
      </div>
      <InputModal
        className="input-modal"
        required
        placeholder={placeholder}
        value={val}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleType(e)}
        name={name}
        type="text"
      />

      <div>
        <TextError>{error}</TextError>
      </div>
    </>
  );
};

export default Input;
