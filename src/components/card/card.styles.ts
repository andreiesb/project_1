import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  height: 12rem;
  width: 9rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  background-image: url(${({ image }) => image});
  background-size: cover;
  border-radius: 0.2rem;
  position: relative;
  margin-right: 1rem;
  transition: .3s ease-in-out;
  
  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 1);
    transform: scale(1.1);
    cursor: pointer;
  }

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
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1)
    );
  }
`;

export const Title = styled.p`
  font-size: clamp(1.2rem, 1vw, 1.3rem);
  color: #fff;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.57);
  border-radius: 0.2rem;
  z-index: 2;
`;
