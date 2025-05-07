// Importa a biblioteca axios para fazer requisições HTTP
import axios from 'axios';
// Importa o React e o hook useState para controle de estado
import React, { useState } from 'react';
// Importa ícones do pacote react-icons
import { 
    FaRegAddressBook, 
    FaRegEnvelope, 
    FaRegUser, 
    FaRegMap 
} from 'react-icons/fa';
// Importa o arquivo de estilos CSS específico da seção de contato
import './contact.css';

// Componente funcional Contact
const Contact = () => {
    // Estado para armazenar os dados do formulário
    const [ form, setForm ] = useState({
        name: '', 
        email: '', 
        subject: '',
        message: '',
    });

    // Função para atualizar o estado conforme os campos do formulário mudam
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar página)

        // Envia os dados via POST para o Google Sheets
        axios.post(
            'https://docs.google.com/spreadsheets/d/12qxfu8IZlOaEGr0kbEOUYkb53SwvzbEwctzKxHG8E24/edit?gid=0#gid=0',
            form
        ).then((response) => {
            console.log(response); // Exibe a resposta no console

            // Limpa o formulário após envio
            setForm({
                name: '', 
                email: '', 
                subject: '',
                message: ''
            });
        });
    };

    return (
        <section className="contact section" id="contact">
            {/* Título da seção */}
            <h2 className="section__title text-cs">Contato</h2>
            <p className="section__subtitle">
                Venha <span>Falar comigo</span>
            </p>

            <div className="contact__container container grid">
                {/* Informações de contato (endereço, email, telefone, etc.) */}
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card--icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card--title">Endereço</h3>
                        <p className="contact__card--data">São João del Rei / RJ</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card--icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card--title">Freelance</h3>
                        <p className="contact__card--data">Disponível</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card--icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card--title">Email</h3>
                        <p className="contact__card--data">matheussoares_ramos@outlook.com.com</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card--icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__card--title">Telefone</h3>
                        <p className="contact__card--data">(11) 97988-5285</p>
                    </div>
                </div>

                {/* Formulário de contato */}
                <form className="contact__form" onSubmit={handleSubmit}>
                    {/* Grupo de inputs: nome e email */}
                    <div className="contact__form--group grid">
                        <div className="contact__form--div">
                            <label className="contact__form--tag text-cs">
                                Seu Nome e Sobrenome <b>*</b>
                            </label>
                            <input
                                type="text" 
                                name="name" 
                                onChange={handleChange}
                                value={form.name} 
                                className="contact__form--input" 
                            />
                        </div>

                        <div className="contact__form--div">
                            <label className="contact__form--tag text-cs">
                                Seu Endereço de Email <b>*</b>
                            </label>
                            <input 
                                type="email"
                                name="email" 
                                onChange={handleChange}
                                value={form.email}  
                                className="contact__form--input" 
                            />
                        </div>
                    </div>

                    {/* Campo de assunto */}
                    <div className="contact__form--div">
                        <label className="contact__form--tag text-cs">
                            Seu Assunto <b>*</b>
                        </label>
                        <input 
                            type="text" 
                            name="subject" 
                            onChange={handleChange}
                            value={form.subject} 
                            className="contact__form--input" 
                        />
                    </div>

                    {/* Campo de mensagem */}
                    <div className="contact__form--div contact__form--area">
                        <label className="contact__form--tag text-cs">
                            Sua Mensagem <b>*</b>
                        </label>
                        <textarea 
                            name="message" 
                            onChange={handleChange}
                            value={form.message} 
                            className="contact__form--input"
                        ></textarea>
                    </div> 

                    {/* Botão de envio e aviso de termos */}
                    <div className="contact__submit">
                        <p>* Aceite os termos e condições.</p>
                        <button type="submit" className="btn text-cs">
                            Enviar Menssagem
                        </button>
                    </div>                  
                </form>
            </div>

            {/* Elemento decorativo opcional comentado */}
            {/* <div className="section__deco deco__left"></div> */}
        </section>
    );
};

export default Contact;
