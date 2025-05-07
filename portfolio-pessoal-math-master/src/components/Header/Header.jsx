// Importa as dependências necessárias do React e outras bibliotecas
import React, { useEffect, useState } from 'react';
// Importa os dados de links de navegação do arquivo Data.js
import { links } from '../../Data';
// Importa ícones de redes sociais e ícones de tema
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
// Importa o Link e animateScroll da biblioteca react-scroll para navegação suave
import { Link, animateScroll } from 'react-scroll';

// Importa o arquivo de estilo para o cabeçalho
import './header.css';

// Função auxiliar para obter o tema armazenado no localStorage
const getStorageTheme = () => {
    let theme = 'light-theme'; // Tema padrão
    // Se houver um tema salvo no localStorage, o tema é atualizado
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
}

const Header = () => {
    // States para controle de exibição do menu, rolagem da página e tema
    const [ showMenu, setShowMenu ] = useState(false); // Controla se o menu está visível
    const [ scrollNav, setScrollNav ] = useState(false); // Controla a classe de navegação baseada no scroll
    const [ theme, setTheme ] = useState(getStorageTheme()); // Define o tema com base no localStorage

    // Função para rolar para o topo da página
    const scrollTop = () => {
        animateScroll.scrollToTop(); // Rolagem suave até o topo
    };

    // Função para verificar se o usuário rolou a página mais de 80px
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true); // Ativa a classe "scroll-header" se o scroll for maior que 80px
        } else {
            setScrollNav(false); // Caso contrário, remove a classe
        }
    };

    // Função para alternar entre os temas claro e escuro
    const toggleTheme = () => {
        // Alterna entre 'light-theme' e 'dark-theme'
        if(theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    // Hook para adicionar um event listener de rolagem para mudar o cabeçalho
    useEffect(() => {
        window.addEventListener('scroll', changeNav); // Escuta o evento de rolagem
    }, []);

    // Hook para adicionar ou remover a classe "no-scroll" no corpo da página
    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu); // Desativa a rolagem quando o menu está aberto
    }, [showMenu]);

    // Hook para atualizar a classe do documento e salvar o tema no localStorage
    useEffect(() => {
        document.documentElement.className = theme; // Altera a classe do HTML para o tema atual
        localStorage.setItem('theme', theme); // Armazena o tema selecionado no localStorage
    }, [theme]);

    return (
        <header className={`${scrollNav ? "scroll-header" : ""} header`}>
            {/* Navegação principal */}
            <nav className="nav">
                {/* Logo que, ao ser clicado, rola para o topo */}
                <Link to="/" onClick={scrollTop} className="nav__logo text-cs">Matheus</Link>

                {/* Menu de navegação (lista de links) */}
                <div className={`${ showMenu ? "nav__menu show__menu" : "nav__menu"}`}>
                    <div className="nav__data">
                        {/* Lista de links de navegação */}
                        <ul className="nav__list">
                            {links.map(({name, path}, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <Link 
                                            className="nav__link text-cs" 
                                            to={path} // Destino de cada link
                                            spy={true} // Ativa o monitoramento de rolagem
                                            hashSpy={true} // Ativa o hashSpy para navegação com hash
                                            smooth={true} // Rolagem suave
                                            offset={-150} // Compensa o offset (distância do topo)
                                            duration={500} // Duração da animação de rolagem
                                            onClick={() => setShowMenu(!showMenu)} // Alterna a visibilidade do menu ao clicar
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Redes sociais */}
                        <div className="header__socials">
                            <a href="https://www.linkedin.com/in/matheus-soares-9242972b8/" className="header__social-link" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>

                            <a href="https://github.com/matheusoare" className="header__social-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>

                            <a href="https://www.instagram.com/matheusoares.s/" className="header__social-link" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Elemento decorativo */}
                    <div className="section__deco deco__left header__deco"></div>
                </div>

                {/* Botões de controle de tema e exibição do menu */}
                <div className="nav__btns">
                    {/* Botão de alternância de tema */}
                    <div className="theme__toggle" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />} {/* Exibe ícone de tema baseado no tema atual */}
                    </div>

                    {/* Botão de alternância do menu (hamburguer) */}
                    <div className={`${showMenu ? "nav__toggle animate__toggle" : "nav__toggle"}`} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
