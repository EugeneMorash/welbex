import React from 'react';
import './../Footer/Footer.scss'
import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";

export function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__row'>
                    <div className='footer__column'>
                        <div className='footer__item'>
                            <h5 className='footer__title'>
                                О компании
                            </h5>
                            <ul className="footer__company list">
                                <li><a href="#l">Партнёрская программа</a></li>
                                <li><a href="#l">Вакансии</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__column'>
                        <div className='footer__item'>
                            <h5 className='footer__title'>
                                Меню
                            </h5>
                            <div className='footer_lists'>
                                <div className='footer__list1'>
                                    <ul className="footer__menu list">
                                        <li><a href="#r">Расчёт стоимости</a></li>
                                        <li><a href="#r">Услуги</a></li>
                                        <li><a href="#r">Виджеты</a></li>
                                        <li><a href="#r">Интеграции</a></li>
                                        <li><a href="#r">Наши клиенты</a></li>
                                    </ul>
                                </div>
                                <div className='footer__list2'>
                                    <ul className="footer__menu list">
                                        <li><a href="#r">Кейсы</a></li>
                                        <li><a href="#r">Благодарственные письма</a></li>
                                        <li><a href="#r">Сертификаты</a></li>
                                        <li><a href="#r">Блог на Youtube</a></li>
                                        <li><a href="#r">Вопрос / Ответ</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='footer__column'>
                        <div className='footer__item'>
                            <div className='footer__contact-block'>
                                <h5 className='footer__title'>
                                    Контакты
                                </h5>
                                <div className="footer__contacts">
                                    <div className='footer__phone'><a href='tel:+75555555555'>+7 555 555-55-55</a></div>
                                    <ul className='footer__social'>
                                        <li className='footer__icon'><a href="#r">
                                            <img src={telegram} alt="telegramm"/></a>
                                        </li>
                                        <li className='footer__icon'>
                                            <a href="#r"><img src={viber} alt="viber"/></a>
                                        </li>
                                        <li className='footer__icon'>
                                            <a href="#r"><img src={whatsapp} alt="whatsapp"/></a>
                                        </li>
                                    </ul>
                                    <p className='footer__address'>
                                        Москва, Путевой проезд 3с1, к 902
                                    </p>
                                    <div className='footer__copyright'>
                                        <p>
                                            ©WELBEX 2022. Все права защищены.
                                        </p>
                                        <a href="#">
                                            Политика конфиденциальности
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}