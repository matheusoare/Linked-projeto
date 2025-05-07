/* ======= Ícones das Tecnologias ======= */
// Importa ícones específicos de tecnologias populares da biblioteca react-icons
import { 
    SiJavascript, 
    SiTypescript, 
    SiReact, 
    SiAngular, 
    SiBootstrap, 
    SiStyledcomponents, 
    SiNodedotjs, 
    SiJquery, 
    SiMysql, 
    SiPython 
  } from 'react-icons/si';
  
  // ======= Links de navegação =======
  // Define as seções principais da aplicação 
  export const links = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'Skills', path: 'skills' },
    { name: 'Resume', path: 'resume' },
    { name: 'Contact', path: 'contact' },
  ];
  
  // ======= Serviços oferecidos =======
  // Listagem de serviços, e suas diferentees funções
  export const services = [
    {
      id: 1,
      name: 'Analista de Dados',
      title: 'Data',
      description: 'Análise de dados comerciais ou de mercado, auxiliando na tomada de decisões.'
    },
    {
      id: 2,
      name: 'Programador Python',
      title: 'Back-end',
      description: 'Desenvolvimento de back-end personalizado com base nas necessidades do cliente.'
    },
  ];
  
  // ======= Habilidades Técnicas =======
  // Lista de tecnologias/ferramentas dominadas, representadas com ícones
  export const skills = [
    {
      id: 1,
      name: 'Anaconda', // Distribuição Python voltada para ciência de dados
      image: <SiPython id='' /> 
    },
    {
      id: 2,
      name: 'Python', //linguagem para analise de dados
      image: <SiPython id='' /> 
    },
    {
      id: 3,
      name: 'React', // Biblioteca JavaScript para construção de interfaces
      image: <SiReact id='react' />
    },
    {
      id: 4,
      name: 'SQL', // Linguagem de consulta a bancos de dados relacionais
      image: <SiMysql id='sql' />
    },
    {
      id: 5,
      name: 'Node js', // Ambiente de execução JavaScript no servidor
      image: <SiNodedotjs id='node' />
    },
  ];
  
  // ======= Currículo (Educação e Experiência Profissional) =======
  // Lista de formações acadêmicas e experiências profissionais com categorias para filtragem
  export const cv = [
    {
      id: 1,
      title: 'Bacharel em Ciência da Computação',
      subtitle: 'Universidade Federal de São João del Rei',
      date: '2025 ~',
      description: 'Curso superior com foco em aprofundar conhecimentos técnicos e desenvolver soft-skills.',
      category: 'educacao',
    },
    {
      id: 2,
      title: 'Curso Data-Python',
      subtitle: 'SENAI',
      date: '2022',
      description: 'Curso introdutório ao uso de bibliotecas Python para análise de dados (pandas, numpy, etc.).',
      category: 'educacao',
    },
    {
      id: 3,
      title: 'Desenvolvedor Back-end',
      subtitle: 'Freelancer',
      date: '2025',
      description: 'Criação de sistema de controle de estoque para supermercados usando Python.',
      category: 'experiencia',
    },
    {
      id: 4,
      title: 'Analista de Dados - Jr',
      subtitle: 'Freelancer',
      date: '2025',
      description: 'Automação de análise de estoque e ponto de equilíbrio para rede de supermercados.',
      category: 'experiencia',
    },
    {
      id: 5,
      title: 'Power-Bi',
      subtitle: 'SENAI',
      date: '2025',
      description: 'Curso voltado à criação de dashboards interativos com Power BI.',
      category: 'educacao',
    },
    {
      id: 6,
      title: 'Power-bi Engineer',
      subtitle: 'Freelancer',
      date: '2025',
      description: 'Desenvolvimento de dashboards para avaliação de desempenho de setores educacionais.',
      category: 'experiencia',
    },
  ];
  