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
                                <div className='footer__list'>
                                    <div className='footer__list-wrapper list1'><a href="#r">Расчёт стоимости</a>
                                        <a href="#r">Услуги</a>
                                        <a href="#r">Виджеты</a>
                                        <a href="#r">Интеграции</a>
                                        <a href="#r">Наши клиенты</a></div>
                                </div>
                                <div className='footer__list'>
                                    <div className='footer__list-wrapper'><a href="#r">Кейсы</a>
                                        <a href="#r">Благодарственные письма</a>
                                        <a href="#r">Сертификаты</a>
                                        <a href="#r">Блог на Youtube</a>
                                        <a href="#r">Вопрос / Ответ</a></div>
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
                                        <a href="#r">
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