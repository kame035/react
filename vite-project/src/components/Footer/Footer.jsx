import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from '../HeaderLink/HeaderLink.jsx'
import './Footer.css'
// Импорт Link для навигации



const Footer = () => {
    return (
        <footer>
            <div className='nav'>
                <img src="../../src/assets/logo/logo.png" alt="" />
                <div className="n">
                    <div className="navigate">
                        <h4>Навигация</h4>
                        <nav>
                            <HeaderLink url='/' title="Главная" />
                            <HeaderLink url='/items' title="Книги" />
                            <HeaderLink url='/some-url' title="Контакты" /> {/* Здесь добавьте корректную ссылку и текст */}
                            <HeaderLink url='/favorites' title="Избранное" />
                        </nav>
                    </div>
                    <div className="navigate">
                        <h4>Жанры</h4>
                        <nav>

                            <Link to="/items">Роман</Link>
                            <Link to="/items">Детектив</Link>
                            <Link to="/items">Фантастика</Link>
                            <Link to="/items">Драма</Link>
                        </nav>

                    </div>
                    <div className="navigate">
                        <h4>Соц сети</h4>
                        <nav>

                            <a href="#">Pinterest</a>
                            <a href="#">YouTube</a>
                            <a href="#">VK</a>
                        </nav>
                    </div>
                    <div className="navigate">
                        <h4>Поддержка</h4>
                        <nav>
                            <a href="#">Пользовательское <br />соглашение</a>
                            <a href="#">Поддержка</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>@ 2024 Файзуллаева Камилла</p>
                <a href='#'>Пользовательское соглашение</a>
            </div>
        </footer>
    );
};

export default Footer;
