import './App.css';


// function for redirecting to documentation 
function redirect_doku() {
  window.open('https://dokuwiki.lolo.school');
}

// function for redirecting to git server 
function redirect_git() {
  window.open('http://85.214.159.205:3000')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>lolo.school</h1>
        <button type="submit" onClick={redirect_doku}>Dokumentation</button>
        <button type="submit" onClick={redirect_git}>Git-Server</button>
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
                <p class="copyright">Developed by Aaron Wagner</p>
                <p class="copyright">© 2022  </p>
            </div>
        </center>
    </footer>
</div>
    </div>
  );
}

export default App;
