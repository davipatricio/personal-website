import loadable from '@loadable/component';

const Navbar = loadable(() => import('../components/Navbar'));
const ProjectContent = loadable(() => import('../components/ProjectContent'));
const Footer = loadable(() => import('../components/Footer'));

export default function Projects() {
  return (
    <>
      <Navbar />

      <ProjectContent />

      <Footer />
    </>
  );
}