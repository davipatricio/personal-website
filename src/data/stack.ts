import { SiCss3, SiExpress, SiGit, SiGo, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiSass, SiSolid, SiStyledcomponents, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si';
import { StackCardProps } from '../components/StackContent/StackCard';
import { MdCss } from 'react-icons/md';

export const stack: StackCardProps[] = [
  {
    name: 'React',
    description: 'Biblioteca JavaScript para construção de interfaces de usuário',
    experience: '3y',
    icon: SiReact,
  },
  {
    name: 'Next.js',
    description: 'Framework React para construção de aplicações web modernas',
    experience: '2y',
    icon: SiNextdotjs
  },
  {
    name: 'Vue.js',
    description: 'Framework JavaScript progressivo para construção de interfaces de usuário',
    experience: '< 1y',
    icon: SiVuedotjs
  },
  {
    name: 'Solid.js',
    description: 'Framework JavaScript para construção de interfaces de usuário',
    experience: '< 1y',
    icon: SiSolid,
  },
  {
    name: 'Node.js',
    description: 'Ambiente de execução JavaScript server-side',
    experience: '4y',
    icon: SiNodedotjs
  },
  {
    name: 'TypeScript',
    description: 'Superset JavaScript que adiciona fortes tipagens e tipagem estática opcional',
    experience: '4y',
    icon: SiTypescript
  },
  {
    name: 'JavaScript',
    description: 'Linguagem de programação interpretada estruturada, dinâmica, fracamente tipada e multi-paradigma',
    experience: '4y',
    icon: SiJavascript
  },
  {
    name: 'express.js',
    description: 'Framework para Node.js para construção de APIs REST',
    experience: '2y',
    icon: SiExpress
  },
  {
    name: 'HTML',
    description: 'Linguagem de marcação utilizada na construção de páginas na Web',
    experience: '4y',
    icon: SiHtml5
  }, {
    name: 'CSS',
    description: 'Linguagem de estilo usada para estilizar a apresentação de um documento escrito em HTML',
    experience: '4y',
    icon: SiCss3
  },
  {
    name: 'Go',
    description: 'Linguagem de programação compilada de código aberto criada pela Google',
    experience: '2y',
    icon: SiGo
  },
  {
    name: 'Python',
    description: 'Linguagem de programação interpretada de alto nível, de propósito geral e de script',
    experience: '1y',
    icon: SiPython
  },
  {
    name: 'Git',
    description: 'Sistema de controle de versão distribuído de código aberto',
    experience: '4y',
    icon: SiGit
  },
  {
    name: 'SASS',
    description: 'Pré-processador de CSS',
    experience: '1y',
    icon: SiSass
  },
  {
    name: 'Styled Components',
    description: 'Utilitário para escrever códigos CSS em JavaScript',
    experience: '1y',
    icon: SiStyledcomponents
  },
  {
    name: 'Emotion',
    description: 'Biblioteca para estilização de componentes',
    experience: '1y',
    icon: MdCss
  },
  {
    name: 'Tailwind CSS',
    description: 'Framework CSS para construção de interfaces de usuário',
    experience: '< 1y',
    icon: SiTailwindcss
  }
];
