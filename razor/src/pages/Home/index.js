import React from "react";
import "./styles.css";
import logo from "../assets/logo.png";
import computer from "../assets/computer.mp4";
import client2 from "../assets/guy.jpg";
import client1 from "../assets/girl.jpg";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { useState } from 'react';
import './form.css';

  

function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
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
          <button>Saiba mais</button>
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
      <div className="plans-section">
        <h1>Escolha sua Maquina:</h1>
        <div className="prices-container">
          <div className="price-card">
            <h1>TALENT</h1>
            <h2>A PARTIR DE R$6.883,45</h2>
            <div className="features">
              <p>Até 4.3GHz</p>
              <p>Até 6 núcleos</p>
              <p>AMD Ryzen 5 5600G ou</p>
              <p>Intel Core i5-12400</p>
            </div>
            <button>Orçar</button>
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
            <button>Orçar</button>
          </div>
          <div className="price-card">
            <h1>VIRTUOS</h1>
            <h2>A PARTIR DE R$39.848,94</h2>
            <div className="features">
              <p>Até 4.8GHz</p>
              <p>Até 64 núcleos</p>
              <p>AMD® Ryzen™ Threadripper 3960X ou</p>
              <p>AMD® Ryzen™ Threadripper 3975WX</p>
            </div>
            <button>Orçar</button>
          </div>
        </div>
      </div>
      <footer>
        <img src={logo} alt="Logo Razor" />
      </footer>
    </div>
    
    <div className="container">
        <h1 className="title">Contato</h1>

        <form className="form" onSubmit={() => { } }>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name} />

          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message} />

          <input className="button" type="submit" value="Enviar" />
        </form>

      </div>
      </>

  );
}

export default Home;
