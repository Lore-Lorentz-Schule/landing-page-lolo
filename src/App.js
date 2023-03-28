// Lang lebe die 12NP!
// 28.03.2023
// Aaron und Tim

import './App.css';
import './Buttons.css'
import 'animate.css';

function App() {
  return (
    <><div className="App">
      <div className="App-header">

        <div class="animate__animated animate__fadeInDown">
          <h1>Lore Lorentz Schule</h1>
          <h4>Berufskolleg | Berufliches Gymnasium</h4>
        </div>

        <div class="animate__animated animate__fadeIn animate__delay-1s">
          <button onClick={event => window.open('http://85.214.159.205:3000')} class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Git-Server</span>
          </button>
        </div>

        <div class="animate__animated animate__fadeIn animate__delay-2s">
          <button onClick={event => window.open('https://dokuwiki.lolo.school')} class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Dokumentation</span>
          </button>
        </div>

        <div class="animate__animated animate__fadeIn animate__delay-3s">
          <button onClick={event => window.open('https://github.com/Lore-Lorentz-Schule')} class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">GitHub</span>
          </button>
        </div>

      </div>

    </div><div class="footer-dark">
        <footer>
          <center>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><a href="https://www.lore-lorentz-schule.de/impressum">Impressum</a></li>
                    <li><a href="https://www.lore-lorentz-schule.de/datenschutz">Datenschutz</a></li>
                    <li><a href="https://github.com/Lore-Lorentz-Schule/landing-page-lolo.git">Source Code</a></li>
                  </ul>
                </div>
              </div>
              <p class="copyright"><a href='https://www.github.com/AAWA-byt'>Developed by Aaron Wagner</a></p>
              <p class="copyright">© 2023 Lore Lorentz Schule</p>
            </div>
          </center>
        </footer>
      </div>
    </>
  );
}

export default App;
