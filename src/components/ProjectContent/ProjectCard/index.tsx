import { MdBookmarks } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CardContainer, CardContent, CardFooter, CardHeader } from './styles';

export interface ProjectCardProps {
  repository: string;
  description: string;
  language: string;
  languageColor: string;
}

export default function ProjectCard({
  repository,
  description,
  language,
  languageColor,
}: ProjectCardProps) {
  const repositoryLink = repository.includes('/')
    ? repository
    : `davipatricio/${repository}`;

  return (
    <CardContainer>
      <CardHeader>
        <MdBookmarks />
        <Link to={`https://github.com/${repositoryLink}`}>{repository}</Link>
      </CardHeader>

      <CardContent>{description}</CardContent>

      <CardFooter languageColor={languageColor}>
        <span className="languageColor" />
        <span>{language}</span>
      </CardFooter>
    </CardContainer>
  );
}
