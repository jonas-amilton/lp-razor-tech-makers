import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { FaFacebookSquare } from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {FaYoutubeSquare} from "react-icons/fa"


const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<FooterLink href="tel:08000066350">0800 006 6350</FooterLink>
			<FooterLink href="tel:5430466350">(54) 3046-6350</FooterLink>
			<FooterLink href="mailto:atendimento@razorcomputadores.com.br">atendimento@razorcomputadores.com.br</FooterLink>
		</Column>	
		<Column>
			<Heading>Razor do Brasil LTDA</Heading>
			<FooterLink href="https://www.google.com/maps/place/R.+Dr.+Pl%C3%ADnio+Moura,+153+-+Vila+Planaltina,+Passo+Fundo+-+RS,+99062-340/@-28.2822519,-52.3771016,17z/data=!3m1!4b1!4m5!3m4!1s0x94e2bfcf2d8591c3:0x78b2d63164e6eb5e!8m2!3d-28.2822519!4d-52.3771016">Rua Dr. Plínio Moura, 153C</FooterLink>
			<FooterLink href="#">Vila Planaltina - 99062-340</FooterLink>
			<FooterLink href="#">Passo Fundo/RS</FooterLink>
		</Column>
		<Column>
			<Heading></Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<FaFacebookSquare />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<FaInstagram />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				<FaTwitterSquare />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<FaYoutubeSquare />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<FaWhatsapp />
				</span>
			</i>
			</FooterLink>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
