import React from "react";
import Button, { ButtonContainer } from "../button/button.styles";
import { Container, Title, Paragraph } from "./info-preview.styles";

const InfoPreview = ({ item: { title, paragraph } }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <ButtonContainer>
        <Button background="#fff"> Saiba Mais </Button>
        <Button border="#fff" color="#fff"> Comprar Projeto </Button>
      </ButtonContainer>
    </Container>
  );
};

export default InfoPreview;
