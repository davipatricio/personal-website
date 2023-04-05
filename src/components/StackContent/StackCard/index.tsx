import { IconType } from 'react-icons';
import { CardContainer, CardContent, CardHeader } from './styles';

export interface StackCardProps {
  name: string;
  description: string;
  experience: string;
  icon: IconType;
}

export default function StackCard({
  name,
  description,
  experience,
  icon: Icon,
}: StackCardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <Icon />
        <span>{name}</span>
        <span className="experience">{experience}</span>
      </CardHeader>

      <CardContent>
        <p>Caso de uso</p>
        <span>{description}</span>
      </CardContent>
    </CardContainer>
  );
}
