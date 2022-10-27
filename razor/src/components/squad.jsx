import React, { Component } from 'react'

import "./squad.css";

import fotoFellipe from '../pages/assets/fellipe.jpg';
import fotoJonas from '../pages/assets/jonas.jfif';

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
                                    <img className="foto" src={fotoFellipe} />
                                    <fingcaption className="participante-nome">Caio Henrique</fingcaption>
                                    <a href="https://www.linkedin.com/in/caio-henrique-048996232/" target="_blank">
                                        <img className="linkedin" src={linkedin} />
                                    </a>
                                    <a href="https://github.com/CaioHenriqueh" target="_blank">
                                        <img className="gitHub" src={gitHub} />
                                    </a>
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" src={fotoFellipe} />
                                    <fingcaption className="participante-nome">Fellipe Scheffer</fingcaption>
                                    <img className="linkedin" src={linkedin} />
                                    <img className="gitHub" src={gitHub} />
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" src={fotoFellipe} />
                                    <fingcaption className="participante-nome">Fellipe Scheffer</fingcaption>
                                    <a href="https://www.linkedin.com/in/fellipe-scheffer/" target="_blank">
                                        <img className="linkedin" src={linkedin} />
                                    </a>
                                    <a href="https://github.com/FellipeScheffer" target="_blank">
                                        <img className="gitHub" src={gitHub} />
                                    </a>
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" id="jonas" src={fotoJonas} />
                                    <fingcaption className="participante-nome">Jonas Amilton</fingcaption>
                                    <a href="https://www.linkedin.com/in/jonas-ag-silva/" target="_blank">
                                        <img className="linkedin" src={linkedin} />
                                    </a>
                                    <a href="https://github.com/jonas-amilton" target="_blank">
                                        <img className="gitHub" src={gitHub} />
                                    </a>
                                    
                                </figure>
                            </li>

                            <li className="participante">
                                <figure className="part-portait">
                                    <img className="foto" src={fotoFellipe} />
                                    <fingcaption className="participante-nome">Fellipe Scheffer</fingcaption>
                                    <img className="linkedin" src={linkedin} />
                                    <img className="gitHub" src={gitHub} />
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
