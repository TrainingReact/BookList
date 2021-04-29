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
  background-color: #e4e4e4;
  min-width: 100px;
  max-width: 100px;
  min-height: 140px;
  border: 4px solid black;
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top: 60px;
  z-index: 5;
  padding: 5px;
  height: 70px;
`;

export const DropDownContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  padding: 1px;
  margin-top: 5px;
  background-color: #d6cdef;
  border-radius: 10px;
`;

export const ContainerButton = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-weight: bolder;
  background-color: #776eb1;
  border-radius: 40px;
  color: white;
  border: 2px solid black;
  padding: 5px;
  outline-style: none;
  transition: 0.3s;

  &:hover {
    border: 3px solid black;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
