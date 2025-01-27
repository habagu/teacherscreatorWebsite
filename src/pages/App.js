import './CSS/App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <h1>Welcome to the Website</h1>
      </header>
    </div>
  );
}

function Navbar() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
      <button className="navbarbutton" onClick={() => setIsVisible(!isVisible)}>
        <img className="navbarbuttonimage" src={isVisible ? 'hide-navbar-icon.png' : 'show-navbar-icon.png'} alt="toggle navbar"/>
      </button>
      {isVisible && (
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <div className="navbar-logo">
                <button className="navbarbutton" onClick={() => setIsVisible(!isVisible)}>
                  <img className="navbarbuttonimage" src={isVisible ? 'hide-navbar-icon.png' : 'show-navbar-icon.png'} alt="toggle navbar"/>
                </button>
              </div>
            </li>
            <li><a href="/">Home</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/supportus">Support Us</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default App;
