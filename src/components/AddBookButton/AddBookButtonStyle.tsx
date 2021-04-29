import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface ContainerIconPropsTypes {
  checkStoreLength?: Boolean;
  color?: string;
}

export const ContainerIcon = styled.svg<ContainerIconPropsTypes>`
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  height: 30%;
  width: 150px;

  &:hover {
    width: 200px;
  }

  &.allFill {
    cursor: pointer;
    transition: 0.5;
    top: 14%;
    right: 1%;
    transform: translateY(-50%);
    height: 10%;
    width: 50px;
    color: brown;

    &:hover {
      width: 60px;
    }
  }
`;

export default Wrapper;
