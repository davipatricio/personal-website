import loadable from '@loadable/component';

const Navbar = loadable(() => import('../components/Navbar'));
const StackContent = loadable(() => import('../components/StackContent'));
const Footer = loadable(() => import('../components/Footer'));

export default function Projects() {
  return (
    <>
      <Navbar />

      <StackContent />

      <Footer />
    </>
  );
}