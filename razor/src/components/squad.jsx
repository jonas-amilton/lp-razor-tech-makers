import React, { Component } from 'react'

import "./squad.css";

import fotoFellipe from '../pages/assets/fellipe2.jpg';
import fotoJonas from '../pages/assets/jonas.jfif';
import fotoErik from '../pages/assets/erik.jfif';
import fotoCaio from '../pages/assets/caio.jfif';
import fotoMariane from '../pages/assets/mariane.jfif';

import linkedin from '../pages/assets/linkedin.png';
import gitHub from '../pages/assets/github1.png';




class NossaEquipe extends Component{
    render(){
        return(
            <>
                <section className="painel-part">
                    
                    <div className="container">

                        <div className="nossaEquipe">
                            <h2 className="title">Nossa Equipe</h2>
                        </div>

                        <ul className="participantes">
                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" id="caio" src={fotoCaio} alt="foto-caio" />
                                    <fingcaption className="participante-nome">Caio Henrique</fingcaption>
                                    <a href="https://www.linkedin.com/in/caio-henrique-048996232/" target="_blank">
                                        <img className="linkedin" src={linkedin} alt="linkedin-caio" />
                                    </a>
                                    <a href="https://github.com/CaioHenriqueh" target="_blank">
                                        <img className="gitHub" src={gitHub} alt="github-caio-henrique" />
                                    </a>
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" id="erik" src={fotoErik} alt="foto-erik" />
                                    <fingcaption className="participante-nome"> Erik Esperidião</fingcaption>
                                    <a href="https://www.linkedin.com/in/erikesperidiao/" target="_blank">
                                        <img className="linkedin" src={linkedin} alt="linkedin-erik" />        
                                    </a>
                                    <a href="https://github.com/ErikMacedo" target="_blank">
                                        <img className="gitHub" src={gitHub} alt="linkedin-erik" />
                                    </a>
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" id="fellipe" src={fotoFellipe} alt="foto-felipe" />
                                    <fingcaption className="participante-nome">Fellipe Scheffer</fingcaption>
                                    <a href="https://www.linkedin.com/in/fellipe-scheffer/" target="_blank">
                                        <img className="linkedin" src={linkedin} alt="linkedin-felipe" />
                                    </a>
                                    <a href="https://github.com/FellipeScheffer" target="_blank">
                                        <img className="gitHub" src={gitHub} alt="github-felipe" />
                                    </a>
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" id="jonas" src={fotoJonas} alt="foto-jonas" />
                                    <fingcaption className="participante-nome">Jonas Amilton</fingcaption>
                                    <a href="https://www.linkedin.com/in/jonas-ag-silva/" target="_blank">
                                        <img className="linkedin" src={linkedin} alt="linkedin-jonas" />
                                    </a>
                                    <a href="https://github.com/jonas-amilton" target="_blank">
                                        <img className="gitHub" src={gitHub} alt="github-jonas" />
                                    </a>
                                    
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" id="mariane" src={fotoMariane} alt="foto-mariane" />
                                    <fingcaption className="participante-nome">Mariane Silva </fingcaption>
                                    <a href="https://www.linkedin.com/in/silvamariane/" target="_blank">
                                    <img className="linkedin" src={linkedin} alt="linkedin-mariane" />
                                    </a>
                                    <a href="https://github.com/marianeasilva" target="_blank">
                                    <img className="gitHub" src={gitHub} alt="github-mariane" />
                                    </a>
                                </figure>
                            </li>

                        </ul>
                    </div>

                </section>
            </>
        )
    }
}

export default NossaEquipe;
