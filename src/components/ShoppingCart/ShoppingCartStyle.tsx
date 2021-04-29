import styled from "styled-components";

export const Button = styled.span`
  text-decoration: underline;
  text-overflow: inherit;
  cursor: pointer;
`;

export const WrapperShoppingCartComponent = styled.div`
  background-color: #eaeded;
  height: 100vh;
  padding: 10px;
`;

export const CardShoppingCart = styled.div`
  background-color: white;
  height: 100%;
  padding: 20px;
  max-width: 75%;
  margin: 10px;
`;

export const SpanText = styled.span`
  font-size: "30px";
  text-transform: "capitalize";
  font-weight: "bold";
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SeparateProductLine = styled.div`
  min-width: "1px";
  background-color: "gray";
  min-height: "18px";
  margin-left: "5px";
  margin-right: "5px";
`;

export const SepareteLine = styled.div`
  height: 1px;
  background-color: gray;
`;

export const DescriptionProduct = styled.div`
  color: green;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const WrapperList = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 380px;
  margin-top: 10px;
`;
