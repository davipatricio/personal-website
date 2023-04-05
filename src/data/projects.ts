import { ProjectCardProps } from '../components/ProjectContent/ProjectCard';

export type Project = Omit<ProjectCardProps, 'stars'>;

export const projects: Project[] = [
  {
    description:
      'Darcy is an open source social network where you can share your thoughts and opinions with other people.',
    repository: 'darcyinc/darcy',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
];
