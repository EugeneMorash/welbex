import React from 'react';
import './../Header/Header.scss'
import logoWelbex from './../../assets/logo_welbex.png'
import telegram from './../../assets/telegram.svg'
import viber from './../../assets/viber.svg'
import whatsapp from './../../assets/whatsapp.svg'
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__row">
                    <NavLink to='/main' className="header__logo">
                        <img src={logoWelbex} alt="Logo Welbex"/>
                        <p>
                            крупный интегратор CRM
                            в Росcии и ещё 8 странах
                        </p>
                    </NavLink>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li><NavLink to='/services'>Услуги</NavLink></li>
                            <li><NavLink to='/widgets'>Виджеты</NavLink></li>
                            <li><NavLink to='/integrations'>Интеграции</NavLink></li>
                            <li><NavLink to='/cases'>Кейсы</NavLink></li>
                            <li><NavLink to='/certificates'>Сертификаты</NavLink></li>
                        </ul>
                    </nav>
                    <div className="header__contacts">
                        <a href='tel:+75555555555'>+7 555 555-55-55'</a>
                        <a href="#r"><img src={telegram} alt="telegramm"/></a>
                        <a href="#r"><img src={viber} alt="viber"/></a>
                        <a href="#r"><img src={whatsapp} alt="whatsapp"/></a>
                    </div>

                </div>
            </div>
        </header>


    );
}
