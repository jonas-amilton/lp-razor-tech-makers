import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Redes Sociais</Heading>
            <FooterLink
              href="https://www.instagram.com/razor_computadores/"
              target="_blank"
            >
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>{" "}
              Instagram
            </FooterLink>
            <FooterLink
              href="https://www.youtube.com/channel/UCinRMTaJQqqqqshaoYkuLoA"
              target="_blank"
            >
              <i className="fab fa-youtube">
                <FaYoutubeSquare />
              </i>{" "}
              Youtube
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contatos</Heading>
            <FooterLink
              href="https://br.linkedin.com/company/razor-computadores-do-brasil"
              target="_blank"
            >
              <i className="fab fa-linkedin">
                <FaLinkedin />
              </i>{" "}
              Linkedin
            </FooterLink>
            <FooterLink
              href="https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
            >
              <i className="fab fa-whatsapp">
                <FaWhatsapp />
              </i>{" "}
              (54) 3046-6350
            </FooterLink>
          </Column>
          <Column>
            <Heading>Precisa de ajuda?</Heading>
            <FooterLink href="https://razorcomputadores.typeform.com/orcamento-site?utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content=#hubspot_utk=&hubspot_page_name=&hubspot_page_url="
			target="_blank"
			>Solicite um orçamento</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
