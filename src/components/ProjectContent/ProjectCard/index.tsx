import { MdBookmarks } from 'react-icons/md';
import { CardContainer, CardContent, CardFooter, CardHeader } from './styles';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

export interface ProjectCardProps {
  repository: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
}

export default function ProjectCard({
  repository,
  description,
  language,
  languageColor,
  stars,
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
        <div className="language">
          <span className="languageColor" />
          <span>{language}</span>
        </div>

        <div className="stars">
          <AiFillStar />
          <span>{stars}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
