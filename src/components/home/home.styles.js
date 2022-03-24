import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeate;
  z-index: 2;
  align-items: center;
  // transform: translateY(-2rem);

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 0.2rem;
    display: block;
    z-index: 1;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1)
    );
  }
`;
