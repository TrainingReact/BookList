import React from "react";
import LabelListBookFieldTypes from "../../../../types/LabelListBookFieldTypes/LabelListBookFieldTypes";
import { ItemMap, SpanListLabel, ValueList } from "./LabelListBookFieldStyle";
const LabelListBookField: React.FC<LabelListBookFieldTypes> = ({
  val,
  label,
}) => {
  return (
    <ItemMap>
      {val !== 0 ? (
        <>
          <SpanListLabel>{label} :</SpanListLabel>
          <ValueList color={"black"}>{val}</ValueList>
        </>
      ) : (
        <ValueList color={"red"}>nessuna disponibilità</ValueList>
      )}
    </ItemMap>
  );
};

export default LabelListBookField;
