import styled from "styled-components";

export const WrapperHeader = styled.div`
  min-width: 100%;
  display: flex;
  background-color: blue;
  min-height: 70px;
  max-height: 60px;
  transition: 1s;
  align-items: center;
`;

export const ContainerIconCart = styled.div`
  width: 100%;
  display: flex;
  height: 65px;
  align-items: center;
  justify-content: flex-end;
  margin-right: 25px;
`;

export const WrapperWidgetCounter = styled.div`
  color: white;
  background-color: brown;
  align-items: center;
  display: flex;
  height: 10px;
  padding: 5px;
  width: 10px;
  border-radius: 50%;
  justify-content: center;
  margin-top: 3px;
  font-family: cursive;
  font-size: 10px;
  font-weight: bolder;
`;

export const WrapperDropDown = styled.div`
  background: #e1e1e1;
  min-width: 60px;
  max-width: 60px;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top: 60px;
  z-index: 1;
`;

export const DropDownContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
