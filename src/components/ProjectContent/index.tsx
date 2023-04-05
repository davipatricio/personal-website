import { useEffect, useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { Container, ProjectContainer } from './styles';

export default function ProjectContent() {
  const [projectCards, setProjectCards] = useState([] as JSX.Element[]);

  useEffect(() => {
    for (const project of projects) {
      const repositoryLink = project.repository.includes('/')
        ? project.repository
        : `davipatricio/${project.repository}`;

      fetch(`https://api.github.com/repos/${repositoryLink}`)
        .then((response) => response.json())
        .then((data) => {
          setProjectCards((oldState) => [
            ...oldState,
            <ProjectCard
              key={project.repository}
              repository={project.repository}
              description={project.description}
              language={project.language}
              languageColor={project.languageColor}
              stars={data.stargazers_count}
            />,
          ]);
        });
    }
  }, []);

  return (
    <Container>
      <h1>Projetos</h1>
      <h3>Projetos de códigos aberto desenvolvidos por mim.</h3>

      <ProjectContainer>{projectCards}</ProjectContainer>
    </Container>
  );
}
