import React from "react";
import "./styleIndex.css";
import logo from "../assets/logo.png";
import computer from "../assets/computer.mp4";
import client2 from "../assets/guy.jpg";
import client1 from "../assets/girl.jpg";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import processador from "../assets/video-processador.mp4";
import placadevideo from "../assets/video-placadevideo.mp4";

function Home() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={logo} alt="Logo Razor" />
        </div>
        <video className="videotag" autoPlay loop muted>
          <source src={computer} type="video/mp4"/>
        </video>

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

        <div className="hero"></div>

        

        <div className="hero">
          <div className="hero-title">
            <h1>Processador Workaholic</h1>
            <p>
            Máquinas com processadores de <br></br>última geração 
            Intel ou AMD e até <br></br>64 núcleos.
            </p>
            <p>
            Customize com multiprocessamento <br></br>de até 2 CPUs por PC
             e a linha Intel <br></br>XEON e AMD Threadripper ou AMD <br></br>Epyc.
            </p>
      
          </div>
          <video className="videotag" autoPlay loop muted>
            <source src={processador} type="video/mp4" />
          </video>
        </div>

        <h2>
          "Desempenho de Maçã<br></br> a preço de banana"
        </h2>

        <div className="testimonials">
          <div className="testimonial-card">
            <img src={client1} alt="Cliente da Razor" />
            <div className="message">
              <h3>Fernanda Pimentel</h3>
              <p>
                "Encontramos na Razor um parceiro de negócios em nossa região
                com amplo know-how em diferentes categorias de computadores,
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

        <div className="hero">
          <div className="hero-title">
          
            <h1>Chip gráfico que não arrega para o seu render</h1>
            <p>
            Se tempo é dinheiro, a Workstation <br></br>Pro é o melhor investimento que <br></br>
            você pode fazer. Alcance a máxima <br></br>velocidade e o extremo <br></br>desempenho com as linhas Nvidia 
            <br></br>RTX Geforce ou RTX Quadro.
            </p>
            
          </div>
          <video className="videotag" autoPlay loop muted>
          <source src={placadevideo} type="video/mp4" />
        </video>
        </div>
        

        <div className="hero-title">
          <h2>Tá esperando o que?</h2>
          <a href="#maquina">
            <button>Escolha sua Máquina</button>
          </a>
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
        <section id="maquina"> </section>
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
                <button>Orçar</button>
              </a>
            </div>

            <div className="price-card recommended">
              <h1>PRODIGY</h1>
              <h2>A PARTIR DE R$10.841,16</h2>
              <div className="features">
                <p>Até 5.1GHz</p>
                <p>Até 8 núcleos</p>
                <p>AMD Ryzen 7 5800 ou</p>
                <p>Intel Core i5-12400</p>
              </div>
              <a href="#form">
                <button>Orçar</button>
              </a>
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
                <button>Orçar</button>
              </a>
            </div>
          </div>
        </div>
        <div className="header">
          <img src={logo} alt="Logo Razor" />
        </div>
      </div>
    </>
  );
}

export default Home;
