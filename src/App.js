import { PrismicRichText, PrismicImage, useSinglePrismicDocument } from '@prismicio/react'

import { ReactComponent as Logo } from "./assets/logo_normal_white.svg";
import Button from './components/button.js';
import './App.scss';
import { IoArrowForwardOutline } from "react-icons/io5";

function App() {
  const [document] = useSinglePrismicDocument('homepage')

  return (
    <div className="global">
      <header className="header">
        <Logo style={{ height: 200 }} />
        <a href="https://bonjouridol.com/">
          <Button variant={"mainPink"} textValue={"Visit the site"} icon={<IoArrowForwardOutline />} />
        </a>
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
