import { Link } from 'react-router-dom';
import { Container, LinksContainer } from './styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdMailOutline } from 'react-icons/md';

const Icon = ({ icon, link }: { icon: React.ReactNode; link: string }) => (
  <Link to={link}>{icon}</Link>
);

export default function Footer() {
  return (
    <Container>
      <span>© 2023 John Doe. All rights reserved.</span>

      <LinksContainer>
        <Icon icon={<AiFillGithub />} link="https://github.com/davipatricio" />
        <Icon
          icon={<AiFillLinkedin />}
          link="https://www.linkedin.com/in/davipatricio/"
        />
        <Icon
          icon={<MdMailOutline />}
          link="mailto:davipatricio@protonmail.com"
        />
      </LinksContainer>
    </Container>
  );
}
