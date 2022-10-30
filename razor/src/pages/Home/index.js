import React from "react";
import "./styles.css";
import logo from "../assets/logo.png";
import computer from "../assets/computer.mp4";
import client2 from "../assets/guy.jpg";
import client1 from "../assets/girl.jpg";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import Form from "../../components/Form.jsx";



  

function Home() {
  
  return (
    <>
    <div className="container">
      <div className="header">
        <img src={logo} alt="Logo Razor" />
      </div>
      <div className="hero">
        <div className="hero-title">
          <h1>Workstations de alta performance</h1>
          <p>
            Conheça a linha projetada especialmente para<br></br> editores de
            vídeo, motion e 3D.
          </p>
          <a href="#maquina">
          <button >Escolha sua Máquina</button></a>
        </div>
        <video className="videotag" autoPlay loop muted>
          <source src={computer} type="video/mp4" />
        </video>
      </div>
      <div className="courses">
        <div className="course">
          <FaCcPaypal className="icon" />
        </div>
        <div className="course">
          <FaCcVisa className="icon" />
        </div>
        <div className="course">
          <FaCcMastercard className="icon" />
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial-card">
          <img src={client1} alt="Cliente da Razor" />
          <div className="message">
            <h3>Fernanda Pimentel</h3>
            <p>
              "Encontramos na Razor um parceiro de negócios em nossa região com
              amplo know-how em diferentes categorias de computadores,
              servidores e storages para armazenamento de dados."
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <img src={client2} alt="Cliente da Razor" />
          <div className="testimonial-message">
            <h3>Pedro Ferreira</h3>
            <p>
              "Trabalho com projetos de arquitetura e design de forma muito
              plena, a máquina aguenta inúmeros softwares rodando ao mesmo
              tempo."
            </p>
          </div>
        </div>
      </div>
      <div className="pillars">
        <div className="pillar">
          <div></div>
          <h1>ARQUITETURA</h1>
        </div>
        <div className="pillar">
          <div></div>
          <h1>ENGENHARIA</h1>
        </div>
        <div className="pillar">
          <div></div>
          <h1>INDÚSTRIA</h1>
        </div>
      </div>
      <section  id="maquina" > </section>
      <div className="prices-section">
        <div className="prices-container">
          <div className="price-card recommended">
            <h1>TALENT</h1>
            <h2>A PARTIR DE R$6.883,45</h2>
            <div className="features">
              <p>Até 4.3GHz</p>
              <p>Até 6 núcleos</p>
              <p>AMD Ryzen 5 5600G ou</p>
              <p>Intel Core i5-12400</p>
            </div>
            <a href="#form">
            <button>Orçar</button></a>
          </div>
        
          <div className="price-card recommended">
            <h1>PRODIGY</h1>
            <h2>
              A PARTIR DE R$10.841,16
            </h2>
            <div className="features">
              <p>Até 5.1GHz</p>
              <p>Até 8 núcleos</p>
              <p>AMD Ryzen 7 5800 ou</p>
              <p>Intel Core i5-12400</p>
            </div>
            <a href="#form">
            <button>Orçar</button></a>
          </div>
        
          <div className="price-card recommended">
            <h1>VIRTUOS</h1>
            <h2>A PARTIR DE R$39.848,94</h2>
            <div className="features">
              <p>Até 4.8GHz</p>
              <p>Até 64 núcleos</p>
              <p>AMD® Ryzen™ Threadripper 3960X ou</p>
              <p>AMD® Ryzen™ Threadripper 3975WX</p>
            </div>
            <a href="#form">
            <button>Orçar</button></a>
          </div>
        </div>
      </div>
    </div>
      </>
      

  );
}

export default Home;
