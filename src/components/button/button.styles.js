import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2rem;
  padding: 1rem;
  border: 1px solid ${({ border }) => (border ? border : "#fff")};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  border-radius: .5rem;
  background: ${({ background }) => (background ? background : "transparent")}
  margin: 2rem;

  font-size: clamp(.9rem, 1vw, 1.3rem);
  color: #fff;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.57);
  text-transform: capitalize;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 350px;
  flex-direction: row;
  justify-content: space-between;
`;

export default Button;
