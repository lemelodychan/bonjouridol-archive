import { PrismicRichText, PrismicImage, useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'

import { ReactComponent as Logo } from "./assets/logo_normal_white.svg";
import Button from './components/IconButton.js';
import { IoArrowForwardOutline } from "react-icons/io5";
import './App.scss';
import HeroArticle from './components/HeroArticle';
import LatestPosts from './components/LatestPosts';

function App() {
  const [document] = useSinglePrismicDocument('homepage')

  return (
    <div className="global">
      <header className="header">
        <div className="logo">
          <Logo style={{ height: 80 }} />
        </div>
        <LatestPosts />
      </header>
      <div className="home-background">
        {document && (
          <PrismicImage field={document.data.image} />
        )}
      </div>
    </div>
  );
}

export default App;
