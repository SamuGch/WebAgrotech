import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Somos from './components/Somos';
import Final from './components/Final';
import Footer from './components/Footer';
import NuestrosProgramas from './components/NuestrosProgramas';
import './index.css'; // estilos

function App() {
  return (
    <BrowserRouter>
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
