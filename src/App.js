import { PrismicRichText, PrismicImage, useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Navbar';

function App() {
  const [document] = useSinglePrismicDocument('homepage')

  return (
    <div className="global">
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>

      <div className="home-background">
        {document && (
          <PrismicImage field={document.data.image} />
        )}
      </div>
    </div>
  );
}

export default App;
