import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { Container, ProjectContainer } from './styles';

export default function ProjectContent() {
  const projectCards = projects.map((project) => (
    <ProjectCard key={project.repository} description={project.description} language={project.language} repository={project.repository} languageColor={project.languageColor} />
  ));

  return (
    <Container>
      <h1>Projetos</h1>
      <h3>Projetos de códigos aberto desenvolvidos por mim.</h3>

      <ProjectContainer>{projectCards}</ProjectContainer>
    </Container>
  );
}
