import React from 'react';
import '../App.css';

// Footer-Komponente, die die Links zur Impressum, Datenschutz und Source Code Seiten enthält
const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <center>
                    <div class="container">
                        <div class="row">
                            <h3>Lore Lorentz Schule</h3>
                            <ul>
                                <li><a href="https://www.lore-lorentz-schule.de/impressum">Impressum</a></li>
                                <li><a href="https://www.lore-lorentz-schule.de/datenschutz">Datenschutz</a></li>
                                <li><a href="https://github.com/Lore-Lorentz-Schule/landing-page-lolo.git">Source Code</a></li>
                            </ul>
                        </div>
                        <p class="copyright"><a href='https://www.github.com/AAWA-byt'>Developed by Aaron Wagner</a></p>
                        <p class="copyright">© 2023 Lore Lorentz Schule</p>
                    </div>
                </center>
            </footer>
        </div>
    );
};

export default Footer;