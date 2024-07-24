import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
      <ToastContainer position='top-center' autoClose={2000} hideProgressBar />
    </div>
  );
};

export default App;
