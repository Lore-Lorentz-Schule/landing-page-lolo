import React from 'react';
import '../App.css';
import '../Buttons.css'
import 'animate.css';

const Header = () => {
    return (
        <>
            <header>
                <div class="animate__animated animate__fadeInDown">
                    <h1>Lore Lorentz Schule</h1>
                    <h4>Berufskolleg | Berufliches Gymnasium</h4>
                </div>
            </header>

            <main>
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
            </main>
        </>
    );
};

export default Header;