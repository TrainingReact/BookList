import styled from "styled-components";

interface ModalPropsType {
  className: string;
}

export const Modal = styled.div<ModalPropsType>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  padding-top: 150px;

  &.ModalPropsType {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.4s;
    @keyframes fadeInOpacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
