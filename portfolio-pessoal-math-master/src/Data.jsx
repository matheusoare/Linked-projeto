/* ======= Icones Tecnologias =======*/
import { SiJavascript, Sipython, SiTypescript, SiReact, SiAngular, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiJquery, SiMysql } from 'react-icons/si';

export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Services',
        path: 'services',
    },
    {
        name: 'Skills',
        path: 'skills',
    },
    {
        name: 'Resume',
        path: 'resume',
    },
    {
        name: 'Contact',
        path: 'contact',
    },
]

export const services = [
    {
        id: 1,
        name: 'Analista de Dados',
        title: 'Data',
        description:'Analise de dados sejam eles comerciais de produtos diversos ou de indicativos de mercados, além de resoluções que possam auxiliar a tomada de decisões.'
    },
    {
        id: 2,
        name: 'Programador Python',
        title: 'Back-end',
        description:'Contrução de um back-end bem estruturado, e fundamentado no interesse apresentado, além de implementações acerca da necessidade apresentada. '
    },
]

export const skills = [
    {
        id: 1,
        name: 'Anaconda',
        image: <SiJavascript id='js' />
    },
    {
        id: 2,
        name: 'Python',
        image: <Sipython id='' />
    },
    {
        id: 3,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 4,
        name: 'SQL',
        image: <SiMysql id='sql' />
    },
    {
        id: 5,
        name: 'Node js',
        image: <SiNodedotjs id='node' />
    },
]

export const cv = [
    {
        id: 1,
        title: 'Bacharel em Ciência da Computação',
        subtitle: 'Universidade Federal de São João del Rei ',
        date: '2025 ~',
        description:
        'Inicio de aprofundamento na area de maneira mais ampla, e o curso de ensino superior que sentia a necessidade de realizar para aprofundar meus conhecimentos. Além de melhorar habilidades de adaptabilidade e softs-skills.',
        category: 'educacao',
    },
    {
        id: 2,
        title: 'Curso Data-Python',
        subtitle: 'SENAI',
        date: '2022',
        description:
        'Uma das experiências mais completas que pude participar, pois aqui tive o primeiro contato com bibliotecas como mathplot.lib, pandas, numpy, statsmodel e dentre outras. Este curso me possibilitou a desenvolver gráficos para tomadas de decisões e comprrender mais como construir boas apresentações e ser eficiente com boas analises.',
        category: 'educacao',
    },
    {
        id: 3,
        title: 'Desenvolvedor Back-end',
        subtitle: 'Freelancer',
        date: '2025',
        description:
        'Utilizei python para desenvolver um sistema de controle de estoque, assimontabilizando entradas e saidas de diferentes produtos para uma rede de supermercados.',
        category: 'experiencia',
    },
    {
        id: 4,
        title: 'Analista de Dados - Jr',
        subtitle: 'Freelancer',
        date: '2025',
        description:
        'A experiência em si foi rapída, mas desenvolvi uma automação para analíse de indicativos de estoque assim como seu ponto de equilibrio para uma rede de supermercado.',
        category: 'experiencia',
    },
    {
        id: 5,
        title: 'Power-Bi',
        subtitle: 'SENAI',
        date: '2025',
        description:
        'Cursei o curso para melhorar meu entendimento e apresentações com novas tecnologias, e apos o termino do curso, fiquei maravilhado com a possibilidade de criar novos dashboards com diferentes dados.',
        category: 'educacao',
    },
    {
        id: 6,
        title: 'Power-bi Engineer',
        subtitle: 'Freelancer',
        date: '2025',
        description:
        'Fui responsavel de fazer dashboards que demonstrassem a perfomance de diferentes setores de uma intituição de ensino, além de retornar planilhas estruturadas com os indicativos e uma arvore de decisão para traçar os noos objetivos da instituição.',
        category: 'experiencia',
    },
]

