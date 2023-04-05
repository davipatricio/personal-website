import { ProjectCardProps } from '../components/ProjectContent/ProjectCard';

export type Project = Omit<ProjectCardProps, 'stars' | 'description'>;

export const projects: Project[] = [
  {
    repository: 'darcyinc/darcy',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
  {
    repository: 'denkybot',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
  {
    repository: 'twitter-ui-clone',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
  {
    repository: 'github-vagas',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
  {
    repository: 'todo-app-react',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
];
