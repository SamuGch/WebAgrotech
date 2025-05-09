import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Somos from './components/Somos';
import Final from './components/Final';
import Footer from './components/Footer';
import NuestrosProgramas from './components/NuestrosProgramas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
      <Header />
      <Hero />
      <Somos  />
      <NuestrosProgramas />
      <Final />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
