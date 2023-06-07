import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Phone from "../../image/Screens/kickshub.gif";
import QR from "../../image/kickshub-qr.png";

const HeaderComponent = ({ title }) => {
  return (
    <Container>
      <ImageContainer className="card-container">
        <Image
          src={Phone}
          alt="phone preview"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.5 }}
        />
      </ImageContainer>
      <Description
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: -30 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Title>{title}</Title>
        <SubTitle>React Native(Expo)</SubTitle>

        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          reiciendis minus ullam nihil delectus ex optio! Explicabo doloribus
          ipsum dicta aut sunt voluptate magni unde illum quas aspernatur
          suscipit ipsam, aliquid saepe omnis vel adipisci distinctio quis
          debitis vero voluptas numquam temporibus accusamus. Assumenda tempore
          quis perspiciatis ab dicta odio ipsa adipisci natus possimus id,
          debitis tenetur aliquid voluptatum velit quasi vitae, dolorem earum
          quam itaque iure laboriosam consequatur! Tempora possimus omnis dicta,
          est natus laborum sunt, cumque officia fugiat sint tenetur labore
          culpa libero rerum ducimus soluta nesciunt veritatis autem
          voluptatibus. Quidem, quas vero aliquid porro molestias expedita
          fugiat.
        </Paragraph>

        <QrCodeContainer>
          <QrImage src={QR} alt="QR Code" />
        </QrCodeContainer>
      </Description>
    </Container>
  );
};

export default HeaderComponent;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: center;
  width: 85%;
  height: auto;
  margin: 1rem auto;
  padding: 5rem 0;

  @media (max-width: 1024px) {
    width: 100vh;
  }

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  width: 70%;

  &:before {
    background: black;
    position: absolute;
    content: "";
    top: 5px;
    left: 15%;
    height: 28px;
    width: 25%;
    z-index: 10;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Image = styled(motion.img)`
  max-height: 600px;
  z-index: -1;
  border-radius: 40px;
  border: 10px solid #000;

  @media (max-width: 1024px) {
    max-height: 400px;
  }
`;

const Description = styled(motion.div)`
  flex: 1;
  width: 100%;

  @media (max-width: 800px) {
    box-sizing: border-box;
    width: 100%;
    margin-left: 3rem;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.mediumText};
  font-size: 3rem;
  text-align: center;
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.darkShade};
  font-size: 1.5rem;
  text-align: center;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.mediumText};
  font-size: 1rem;
`;

const QrCodeContainer = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const QrImage = styled.img`
  max-height: 300px;
  border-radius: 50px;
`;
