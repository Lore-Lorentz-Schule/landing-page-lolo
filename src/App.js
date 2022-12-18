import './App.css';
import lolo_logo from './lolo.png';


// function for redirecting to documentation 
function redirect_doku() {
  window.open('https://dokuwiki.lolo.school');
}

// function for redirecting to git server 
function redirect_git() {
  window.open('http://85.214.159.205:3000')
}

// function for redirecting to homepage
function redirect_lolo() {
  window.open('https://www.lore-lorentz-schule.de')
}


// typewriter animation 

var i = 0;
var txt = 'Willkommen auf lolo.school! Diese Website gehört der Lore Lorentz Schule. Hier findest du Links zu unserem Git-Server und einer Dokumentation für diesen.';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', function() {
  typeWriter();
})



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lolo_logo} alt="LoLo Logo" />
        <div className='container-typewriter'>
        <p id="typewriter"></p>
        </div>
        <button type="submit" onClick={redirect_git}>Git-Server</button>
        <button type="submit" onClick={redirect_doku}>Dokumentation</button>
        <button type="submit" onClick={redirect_lolo}>Lore Lorentz Schule</button>
      </header>

      <div class="footer-dark">
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
                <p class="copyright">© 2022  </p>
            </div>
        </center>
    </footer>
</div>
    </div>
  );
}

export default App;
