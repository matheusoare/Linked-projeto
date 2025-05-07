import React, { useState } from 'react';
import './resume.css';  // Importa os estilos para o componente
import { cv } from '../../Data';  // Importa os dados do currículo de um arquivo de dados
import Card from './Card';  // Importa o componente Card, usado para exibir as informações de cada item do currículo

const Resume = () => {
  return (
    <section className="resume section" id="resume">
        {/* Título da seção */}
        <h2 className="section__title text-cs">Resumo</h2>

        {/* Subtítulo da seção */}
        <p className="section__subtitle">
            Minha <span>Trajetória</span>
        </p>

        {/* Contêiner para os grupos de currículo */}
        <div className="resume__container container grid">
            {/* Seção de Educação */}
            <div className="resume__group">
                <h3 className="resume__heading">Educação</h3>

                {/* Mapeia os dados de educação e renderiza um Card para cada item */}
                <div className="resume__items">
                    {cv.map((val, id) => {
                        // Filtra os itens com categoria 'educacao' e renderiza um Card para cada um
                        if(val.category === 'educacao') {
                            return (
                                <Card 
                                    key={id} 
                                    title={val.title}  // Título do item (por exemplo, nome do curso)
                                    subtitle={val.subtitle}  // Subtítulo do item (por exemplo, instituição)
                                    date={val.date}  // Data do item (por exemplo, ano de conclusão)
                                    description={val.description}  // Descrição do item (detalhes sobre o curso)
                                />
                            );
                        }
                    })}
                </div>
            </div>

            {/* Seção de Experiência */}
            <div className="resume__group">
                <h3 className="resume__heading">Experiência</h3>

                {/* Mapeia os dados de experiência e renderiza um Card para cada item */}
                <div className="resume__items">
                    {cv.map((val, id) => {
                        // Filtra os itens com categoria 'experiencia' e renderiza um Card para cada um
                        if(val.category === 'experiencia') {
                            return (
                                <Card 
                                    key={id} 
                                    title={val.title}  // Título do item (por exemplo, cargo)
                                    subtitle={val.subtitle}  // Subtítulo do item (por exemplo, empresa)
                                    date={val.date}  // Data do item (por exemplo, período de trabalho)
                                    description={val.description}  // Descrição do item (detalhes sobre a experiência)
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>

        {/* Elemento decorativo (comentado, mas poderia ser usado para decoração) */}
        {/* <div className="section__deco deco__left"></div> */}
    </section>
  );
};

export default Resume;
