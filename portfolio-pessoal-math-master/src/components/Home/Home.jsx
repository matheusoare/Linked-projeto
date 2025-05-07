import React from 'react';
import './home.css';
import profile from '../../assets/profile-image.png.png'; // Imagem do perfil
import shapeOne from '../../assets/anaconda-icon.png'; // Ícone de Anaconda
import shapetwo from '../../assets/sql-icon.png'; // Ícone de SQL
import shapethree from '../../assets/python-icon.png'; // Ícone de Python

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Ícones de redes sociais
import CV from '../../assets/curriculo_definitivo.pdf'; // Arquivo do currículo em PDF

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

                    {/* Ícones de habilidades */}
                    <img src={shapeOne} alt="" className="shape shape__1"/>
                    <img src={shapetwo} alt="" className="shape shape__2"/>
                    <img src={shapethree} alt="" className="shape shape__3"/>
                </div>

                <p className="home__text">
                    Sou de São Paulo, e venho para São João del Rei para realizar minha graduação em Ciências da Computação, no âmbito profissional fiz alguns projetos na linguagem python |Back-end| e algumas analises com implementação e apresentação em power-bi para tomada de decisões de um grupo.
                </p>

                <div className="home__socials">
                    {/* Links para redes sociais */}
                    <a href="https://www.linkedin.com/in/matheus-soares-9242972b8/" className="home__social-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/matheusoare" className="home__social-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a href="https://www.instagram.com/matheusoares.s/" className="home__social-link" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                <div className="home__btns">
                    {/* Botões de download e link para Skills */}
                    <a download href={CV} className="btn text-cs">Download CV</a>
                    <a href="#skills" className="hero__link text-cs">Minhas Skills</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
