import React from "react";
import LabelListBookFieldTypes from "../../../../types/LabelListBookFieldTypes/LabelListBookFieldTypes";
import { ItemMap, SpanListLabel, ValueList } from "./LabelListBookFieldStyle";
const LabelListBookField: React.FC<LabelListBookFieldTypes> = ({
  val,
  label,
}) => {
  return (
    <ItemMap>
      <SpanListLabel>{label} :</SpanListLabel>
      <ValueList>{label === "author" ? val.author : val.gender}</ValueList>
    </ItemMap>
  );
};

export default LabelListBookField;
