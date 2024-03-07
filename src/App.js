import logo from './loopzLogoTemp.png';
import leechLogo from './leechLogo.png'
import './App.css';

function App() {
  return (
      <>
          <div className="App">

              <img src={logo} className="App-logo" alt="logo"/>
              <p className="loopz-name">Loopz</p>
              <h1>Coming soon!</h1>

              <footer className="footerContainer">
                  <div className="logoContainer">
                      <img src={leechLogo} className="Leech-logo" alt="logo"/>
                      <span className="logoText">Leechy</span>
                  </div>
              </footer>
          </div>
      </>

  );
}

export default App;
