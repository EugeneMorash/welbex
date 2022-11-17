import React from 'react';
import './../Main/Main.scss'

export function Main() {
    return (
        <main className='main'>
            <section className='about'>
                <div className='about__row'>
                    <div className='about__body'>
                        <h1 className='about__heading'>
                            Зарабатывайте больше
                        </h1>
                        <div className='about__welbex'>
                            с WELBEX
                        </div>
                        <p className='about__text'>
                            Развиваем и контролируем <br/> продажи за вас
                        </p>
                    </div>
                    <div className='about__cards cards'>
                        <div className='cards__item'>
                            <div className='cards__title'>
                                Вместе с <span>бесплатной
                                консультацией</span> мы дарим:
                            </div>
                            <div className='cards__row'>
                                <div className='cards__column'>
                                    <div className='cards__item'>
                                        <h3 className='cards__card-title'>
                                            Виджеты
                                        </h3>
                                        <p className='cards__text'>
                                            30 готовых решений
                                        </p>
                                    </div>
                                </div>
                                <div className='cards__column'>
                                    <div className='cards__item'>
                                        <h3 className='cards__card-title'>
                                            Dashboard
                                        </h3>
                                        <p className='cards__text'>
                                            с показателями
                                            вашего бизнеса
                                        </p>
                                    </div>
                                </div>
                                <div className='cards__column'>
                                    <div className='cards__item'>
                                        <h3 className='cards__card-title'>
                                            Skype Аудит
                                        </h3>
                                        <p className='cards__text'>
                                            отдела продаж и CRM системы
                                        </p>
                                    </div>
                                </div>
                                <div className='cards__column'>
                                    <div className='cards__item'>
                                        <h3 className='cards__card-title'>
                                            35 дней
                                        </h3>
                                        <p className='cards__text'>
                                            использования CRM
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='cards__adaptive'>
                                <div className='cards__item-adaptive'>
                                    <p className='cards__title-adaptive'>Skype аудит</p>
                                </div>
                                <div className='cards__item-adaptive'>
                                    <p className='cards__title-adaptive'>30 виджетов</p>
                                </div>
                                <div className='cards__item-adaptive'>
                                    <p className='cards__title-adaptive'>Dashboard</p>
                                </div>
                                <div className='cards__item-adaptive'>
                                    <p className='cards__title-adaptive'>Месяц аmoCRM</p>
                                </div>
                            </div>
                            <button className='cards__button'>Получить консультацию</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}