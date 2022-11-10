import React, { Component } from "react";

import "./squad.css";
import "./footer.css";

import fotoFellipe from "../pages/assets/fellipe2.jpg";
import fotoJonas from "../pages/assets/jonas.jfif";
import fotoErik from "../pages/assets/erik.jfif";
import fotoCaio from "../pages/assets/caio.jfif";
import fotoMariane from "../pages/assets/mariane.jfif";
import fotoJoao from "../pages/assets/joao.jfif";

import linkedin from "../pages/assets/linkedin.png";
import gitHub from "../pages/assets/github1.png";
import logoRazor from "../pages/assets/logo.png";

class NossaEquipe extends Component {
  render() {
    return (
      <>
        <section className="painel-part">
          <div className="container">
            <div className="nossaEquipe">
              <h2 className="title">Squad tech-makers</h2>
            </div>

            <ul className="participantes">
              <li className="participante">
                <figure className="part-portait">
                  <h1>Dev</h1>
                  <img
                    className="foto"
                    id="caio"
                    src={fotoCaio}
                    alt="foto-caio"
                  />
                  <fingcaption className="participante-nome">
                    Caio Henrique
                  </fingcaption>
                  <a
                    href="https://www.linkedin.com/in/caio-henrique-048996232/"
                    target={"_blank"}
                  >
                    <img
                      className="linkedin"
                      src={linkedin}
                      alt="linkedin-caio"
                    />
                  </a>
                  <a href="https://github.com/CaioHenriqueh" target={"_blank"}>
                    <img
                      className="gitHub"
                      src={gitHub}
                      alt="github-caio-henrique"
                    />
                  </a>
                </figure>
              </li>

              <li className="participante">
                <figure className="part-portait">
                  <h1>Dev</h1>
                  <img
                    className="foto"
                    id="erik"
                    src={fotoErik}
                    alt="foto-erik"
                  />
                  <fingcaption className="participante-nome">
                    {" "}
                    Erik Esperidião
                  </fingcaption>
                  <a
                    href="https://www.linkedin.com/in/erikesperidiao/ "
                    target={"_blank"}
                  >
                    <img
                      className="linkedin"
                      src={linkedin}
                      alt="linkedin-erik"
                    />
                  </a>
                  <a href="https://github.com/ErikMacedo" target={"_blank"}>
                    <img
                      className="gitHub"
                      src={gitHub}
                      alt="linkedin-erik"
                      target={"_blank"}
                    />
                  </a>
                </figure>
              </li>

              <li className="participante">
                <figure className="part-portait">
                  <h1>Designer</h1>
                  <img
                    className="foto"
                    id="fellipe"
                    src={fotoFellipe}
                    alt="foto-felipe"
                  />
                  <fingcaption className="participante-nome">
                    Fellipe Scheffer
                  </fingcaption>
                  <a
                    href="https://www.linkedin.com/in/fellipe-scheffer/"
                    target={"_blank"}
                  >
                    <img
                      className="linkedin"
                      src={linkedin}
                      alt="linkedin-felipe"
                    />
                  </a>
                  <a
                    href="https://github.com/FellipeScheffer"
                    target={"_blank"}
                  >
                    <img className="gitHub" src={gitHub} alt="github-felipe" />
                  </a>
                </figure>
              </li>

              <li className="participante">
                <figure className="part-portait">
                  <h1>Dev Lider</h1>
                  <img
                    className="foto"
                    id="jonas"
                    src={fotoJonas}
                    alt="foto-jonas"
                  />
                  <fingcaption className="participante-nome">
                    Jonas Amilton
                  </fingcaption>
                  <a
                    href="https://www.linkedin.com/in/jonas-ag-silva/"
                    target={"_blank"}
                  >
                    <img
                      className="linkedin"
                      src={linkedin}
                      alt="linkedin-jonas"
                    />
                  </a>
                  <a href="https://github.com/jonas-amilton" target={"_blank"}>
                    <img className="gitHub" src={gitHub} alt="github-jonas" />
                  </a>
                </figure>
              </li>

              <li className="participante">
                <figure className="part-portait">
                  <h1>Designer</h1>
                  <img
                    className="foto"
                    id="mariane"
                    src={fotoMariane}
                    alt="foto-mariane"
                  />
                  <fingcaption className="participante-nome">
                    Mariane Silva{" "}
                  </fingcaption>
                  <a
                    href="https://www.linkedin.com/in/silvamariane/"
                    target={"_blank"}
                  >
                    <img
                      className="linkedin"
                      src={linkedin}
                      alt="linkedin-mariane"
                    />
                  </a>
                  <a href="https://github.com/marianeasilva" target={"_blank"}>
                    <img className="gitHub" src={gitHub} alt="github-mariane" />
                  </a>
                </figure>
              </li>
              <li className="participante">
                <figure className="part-portait">
                  <h1>Designer</h1>
                  <img
                    className="foto"
                    id="joao"
                    src={fotoJoao}
                    alt="foto-joao"
                  />
                  <fingcaption className="participante-nome">
                    João Bergalho{" "}
                  </fingcaption>
                  <a
                    href="https://www.linkedin.com/in/jhbergallo/"
                    target={"_blank"}
                  >
                    <img
                      className="linkedin"
                      src={linkedin}
                      alt="linkedin-joao"
                    />
                  </a>
                  <a href="https://github.com/jhbergallo" target={"_blank"}>
                    <img className="gitHub" src={gitHub} alt="github-joao" />
                  </a>
                </figure>
              </li>
            </ul>
            <footer className="footer">

<div>
        <p>"Uma fabricante brasileira de<br></br> computadores de alta performance."</p>
    </div>

<div>
        <ul>
        <img
        className="foto"
        id="logo-razor"
        src={logoRazor}
        alt="logo-razor"
      />
        </ul>

    </div>

    <div className="contato">
        <ul>
            <li>
              <a href="mailto:contato@razorcomputadores.com">Contate nos por E-mail</a></li>
            <li>
              <a href="https://www.bing.com/maps?&ty=18&q=Razor%20Computadores%20Passo%20Fundo%20Rs%20RS&ss=ypid.YN7993x3285339304219322685&ppois=-28.267486572265625_-52.4241943359375_Razor%20Computadores_YN7993x3285339304219322685~&cp=-28.267487~-52.424194&v=2&sV=1" target={"_blank"}>
              Passo Fundo, Rio Grande do Sul
              </a>
            </li>
        </ul>

    </div>

</footer>
          </div>
        </section>
      </>
    );
  }
}

export default NossaEquipe;
