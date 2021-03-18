import styled from "styled-components";

export interface WrapperStylePropsTypes {
  className: string;
  color: string;
}

export const Wrapper = styled.div<WrapperStylePropsTypes>`
  display: flex;
  justify-content: ${(props) => props.className};
  padding: 5px;
  background-color: ${(props) => props.color};
  align-items: center;
  width: 5.5%;
  height: 30px;
  border-radius: 50px;
`;

export const Switch = styled.div`
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;
