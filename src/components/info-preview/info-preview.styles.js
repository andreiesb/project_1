import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  height: 20rem;
  z-index: 4;
  margin-left: 4rem;
`;

export const Title = styled.p`
  font-size: clamp(2rem, 4vw, 3.3rem);
  color: #fff;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.47);
`;

export const Paragraph = styled.p`
  font-size: clamp(1rem, 4vw, 1.3rem);
  color: #fff;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.17);
`;
