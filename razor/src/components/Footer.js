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
			<FooterLink href="https://goo.gl/maps/YsAsMTdo9VmqwXjn9" target="_blank">Rua Dr. Plínio Moura, 153C</FooterLink>
			<FooterLink href="https://goo.gl/maps/YsAsMTdo9VmqwXjn9" target="_blank">Vila Planaltina - 99062-340</FooterLink>
			<FooterLink href="https://goo.gl/maps/YsAsMTdo9VmqwXjn9" target="_blank">Passo Fundo/RS</FooterLink>
		</Column>
		<Column>
			<Heading></Heading>
			<FooterLink href="https://www.facebook.com/razorcomp/" target="_blank">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<FaFacebookSquare />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/razor_computadores/" target="_blank">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<FaInstagram />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/channel/UCinRMTaJQqqqqshaoYkuLoA" target="_blank">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<FaYoutubeSquare />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<FaWhatsapp />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://br.linkedin.com/company/razor-computadores-do-brasil" target="_blank">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<FaLinkedin />
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
