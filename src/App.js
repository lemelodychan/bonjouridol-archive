import { ReactComponent as Logo } from "./assets/logo_normal_pink.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import './App.scss';

function Button() {
  return (
    <button className="btn">
      <span>Visit the website</span>
      <IoArrowForwardOutline />
    </button>
  );
}


function App() {
  return (
    <div className="global">
      <header className="header">
        <Logo style={{ height: 200 }} />
        <p>
          Coming soon
        </p>
        <a href="https://bonjouridol.com/">
          <Button />
        </a>
      </header>
    </div>
  );
}

export default App;
