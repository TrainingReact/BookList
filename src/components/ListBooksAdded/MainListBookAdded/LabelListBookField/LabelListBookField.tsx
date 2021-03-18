import React from "react";
import LabelListBookFieldTypes from "../../../../types/LabelListBookFieldTypes/LabelListBookFieldTypes";
import "./LabelListBookFieldStyle.css";

const LabelListBookField: React.FC<LabelListBookFieldTypes> = ({
  val,
  label,
}) => {
  return (
    <div className="item-map">
      <span className="span-list-label">{label} :</span>
      <span className="value-list">{val.gender.value}</span>
    </div>
  );
};

export default LabelListBookField;
