import React from "react";
import './Header.css';

import smallLeft from '../Assets/Icons/small-left.png';
import smallRight from '../Assets/Icons/small-right.png';
import search from '../Assets/Icons/search.png';

const Header = () => {

    return(
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left"><img src={smallLeft} alt="Left Arrow" /></button>
                <button className="arrow-right"><img src={smallRight} alt="Right Arrow" /></button>
                
            </div>
            <div className="header__search">
                <img src={search} alt=""></img>
                <input id="search_input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
                
            </div>
            <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;