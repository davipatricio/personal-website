import ProjectCard from './ProjectCard';
import { Container, ProjectContainer } from './styles';

export default function ProjectContent() {
  return (
    <Container>
      <h1>Projetos</h1>
      <h3>Projetos de códigos aberto desenvolvidos por mim.</h3>

      <ProjectContainer>
        <ProjectCard
          repository="darcy"
          description="test"
          language="TypeScript"
          languageColor="blue"
          stars={123}
        />
        <ProjectCard
          repository="vercel/next"
          description="test"
          language="TypeScript"
          languageColor="blue"
          stars={123}
        />
      </ProjectContainer>
    </Container>
  );
}
