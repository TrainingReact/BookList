import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  transition: 1s;
  max-height: 60px;
  min-height: 60px;
`;

export default Container;

export const ButtonSaveBook = styled.button`
  width: 200px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: rgb(165, 42, 42);
  color: white;
  font-weight: bold;
  height: 30px;
  transition: 1s;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    width: 220px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: rgb(165, 42, 42);
    color: white;
    font-weight: bold;
    transition: 0.2s;
    cursor: pointer;
    height: 35px;
  }
`;
