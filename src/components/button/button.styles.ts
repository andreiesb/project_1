import styled from "styled-components";

import { ButtonProps} from '../../@types/button'

const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  padding: 1rem;
  border: 1px solid ${({ border }) => (border ?? "#fff")};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  border-radius: .5rem;
  background-color: ${({ background }) => (background ?? "transparent")};
  margin: 0.5rem 1rem;

  font-size: clamp(.9rem, 1vw, 1.3rem);
  color: ${({ color }) => (color ?? "#484848")};
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
  max-width: 450px;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export default Button;
