import loadable from '@loadable/component';

const Navbar = loadable(() => import('../components/Navbar'));
const HomeContent = loadable(() => import('../components/HomeContent'));
const Footer = loadable(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <Navbar />

      <HomeContent />

      <Footer />
    </>
  );
}