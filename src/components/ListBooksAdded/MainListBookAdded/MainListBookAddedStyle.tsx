import styled from "styled-components";

interface HeaderPropsTypes {
  className: string;
}

interface WrapperItemPropsTypes {
  className: string;
}

export const Header = styled.div<HeaderPropsTypes>`
  background-color: #776eb1;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bolder;
  font-family: cursive;
  text-transform: uppercase;
  align-items: center;

  &.borderTopRightRadius {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }

  &.borderTopLeftRadius {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
`;

export const ContItemMapFlex = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 40%;
  max-width: 40%;
  justify-content: space-around;
`;

export const ContItemMapFlexIcon = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 10%;
  justify-content: space-around;
`;

export const WrapperItem = styled.div<WrapperItemPropsTypes>`
  display: flex;
  justify-content: space-around;
  background-color: #d6cdef;
  padding: 10px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }

  &.borderBottomLeftRadius {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &.borderBottomRightRadius {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const ImgMapList = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

export const ContImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50px;
  min-width: 50px;
  border-radius: 50%;
  min-height: 50px;
  max-height: 50px;
`;

export const AddBookSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  text-transform: uppercase;
`;

export const CursorPointer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 30px;
  &::hover {
    cursor: pointer;
    color: brown;
  }
`;

export const CursorPointerDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::hover {
    cursor: pointer;
    color: brown;
  }
`;

export const NameHeaderText = styled.div`
  text-overflow: ellipsis;
`;
