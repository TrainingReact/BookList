import styled from "styled-components";

export const DirectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ImgSize = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContImg = styled.div`
  display: flex;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  margin-top: 20px;
`;

export const Close = styled.span`
  color: #020202;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    color: #222;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
