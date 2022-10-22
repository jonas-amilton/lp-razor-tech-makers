import React from "react";
import "./FichaTecnica.css";
import videocpu from "./videos/video-processador.mp4";
import videogpu from "./videos/video-placadevideo.mp4";


function fichatecnica() {
  return (
      
      <>


  <section className="home">
    <div>
      <h3>
        Chip gráfico que não arrega para o seu render
      </h3>
      <p>
        Se tempo é dinheiro, a Workstation Pro é o melhor investimento que você
        pode fazer. Alcance a máxima velocidade e o extremo desempenho com as
        linhas Nvidia RTX Geforce ou RTX Quadro.
      </p>
    </div>
    <video
      className="banner-video"
      src={videogpu}
      loop=""
      autoPlay=""
      muted=""
    />
    &gt;
  </section>
  <section className="home">
    <div>
      <h3>Processador Workaholic</h3>
      <p>
        Máquinas com processadores de última geração Intel ou AMD e até 64
        núcleos. Customize com multiprocessamento de até 2 CPUs por PC e a linha
        Intel XEON e AMD Threadripper ou AMD Epyc.
      </p>
    </div>
    <video
      className="banner-video"
      src={videocpu}
      loop=""
      autoPlay=""
      muted=""
    />
    &gt;
  </section>


    </>
  );
}

export default fichatecnica;
