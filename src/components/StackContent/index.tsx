import { stack } from '../../data/stack';
import StackCard from './StackCard';
import { Container, ProjectContainer } from './styles';

export default function ProjectContent() {
  const stackCards = stack.map((tech) => (
    <StackCard
      key={tech.name}
      name={tech.name}
      description={tech.description}
      experience={tech.experience}
      icon={tech.icon}
    />
  ));

  return (
    <Container>
      <h1>Tecnologias</h1>
      <h3>
        Tecnologias e frameworks que eu utilizo no dia-a-dia e em meus projetos.
      </h3>

      <ProjectContainer>{stackCards}</ProjectContainer>
    </Container>
  );
}
