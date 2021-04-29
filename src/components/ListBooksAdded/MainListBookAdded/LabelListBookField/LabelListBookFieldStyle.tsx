import styled from "styled-components";

export const ItemMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  max-width: 300px;
  max-height: 300px;

  @media (max-width: 800px) {
    margin-top: 15px;
    max-width: 100px;
    max-height: 100px;
  }
`;

export const SpanListLabel = styled.span`
  font-size: 20px;
  font-family: cursive;
  white-space: nowrap;
  margin-right: 20px;
`;

export const ValueList = styled.span`
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: cursive;
  font-weight: bold;
  white-space: wrap;
  color: ${(props) => props.color};
`;
