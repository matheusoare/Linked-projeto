import React from 'react';
import './home.css';
import profile from '../../assets/profile-image.png.png'
import shapeOne from '../../assets/anaconda-icon.png';
import shapetwo from '../../assets/sql-icon.png';
import shapethree from '../../assets/python-icon.png';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import CV from '../../assets/curriculo_definitivo.pdf'

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Olá, <span>Meu nome é</span>
                </p>

                <h1 className="home__title text-cs"><span>MATHEUS</span> Soares</h1>

                <p className="home__job">
                    <span className="text-cs">Eu sou um</span> <b>Analista de dados e programador Back-end</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profile} alt="Minha imagem de perfil" className="home__profile" />
                    </div>

                    {/*<p className="home__data home__data-one">
                        <span className="text-lg">
                            2 <b>+</b>
                        </span>

                        <span className="text-sm text-cs">
                            Years of <span>Experience</span>
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg">30</span>

                        <span className="text-sm text-cs">
                            Completed <span>Projects</span>
                        </span>
                    </p>*/}

                    <img src={shapeOne} alt="" className="shape shape__1"/>
                    <img src={shapetwo} alt="" className="shape shape__2"/>
                    <img src={shapethree} alt="" className="shape shape__3"/>
                </div>

                <p className="home__text">
                    Sou de São Paulo, e venho para São João del Rei para realizar minha graduação em Ciências da Computação, no âmbito profissional fiz alguns projetos na linguagem python |Back-end| e algumas analises com implementação e apresentaçâo em power-bi para tomada de decisões de um grupo.
                </p>

                <div className="home__socials">
                    <a href="https://www.linkedin.com/in/matheus-soares-9242972b8/" className="home__social-link" target="_blank">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/matheusoare" className="home__social-link" target="_blank">
                        <FaGithub />
                    </a>

                    <a href="https://www.instagram.com/matheusoares.s/" className="home__social-link" target="_blank">
                        <FaInstagram />
                    </a>
                </div>

                <div className="home__btns">
                    <a download="" href={CV} className="btn text-cs">Dowload CV</a>
                    {/*<a href="" className="btn text-cs">Dowload CV</a>*/}
                    <a href="#skills" className="hero__link text-cs">Minhas Skills</a>
                </div>
            </div>

            {/* <div className="section__deco deco__left"></div> */}
        </div>
    </section>
  );
};

export default Home;