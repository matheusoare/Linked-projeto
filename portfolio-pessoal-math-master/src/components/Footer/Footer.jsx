// Importa o React
import React from 'react';

// Importa ícones das redes sociais do pacote react-icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Importa o arquivo CSS responsável pela estilização do rodapé
import './footer.css';

// Componente funcional Footer
const Footer = () => {
    return (
        // Elemento de rodapé principal com classe "footer"
        <footer className="footer">
            {/* Container do rodapé com grid para organizar os elementos */}
            <div className="footer__container container grid">

                {/* Seção com os links para redes sociais */}
                <div className="footer__socials">
                    {/* Link para o LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/matheus-soares-9242972b8/" 
                        className="footer__social-link" 
                        target="_blank" 
                        rel="noopener noreferrer" // Segurança
                    >
                        <FaLinkedin />
                    </a>

                    {/* Link para o GitHub */}
                    <a 
                        href="https://github.com/matheusoare" 
                        className="footer__social-link" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    {/* Link para o Instagram */}
                    <a 
                        href="https://www.instagram.com/matheusoares.s/" 
                        className="footer__social-link" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </div>

                {/* Texto de direitos autorais */}
                <p className="footer__copyright text-cs">
                    &copy; 2025 <span>Matheus</span>. Todos os direitos Reservados
                </p>

                {/* Crédido de desenvolvimento */}
                <p className="footer__copyright text-cs">
                    Desenvolvido por <span>Matheus Soares</span>
                </p>
            </div>
        </footer>
    );
};

// Exporta o componente para ser usado em outros lugares do projeto
export default Footer;
