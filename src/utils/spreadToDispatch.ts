import { Obj } from "./../components/MainModalForm/MainModalForm";

const SpreadToDispatch = (objToCopy: Obj, key: string, value: any) => {
  var objectUpdated = { ...objToCopy, [key]: value };

  return objectUpdated;
};

export default SpreadToDispatch;
