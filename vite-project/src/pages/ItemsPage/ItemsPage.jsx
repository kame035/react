import React, { useEffect, useState } from 'react';
import './ItemsPage.css';
import Items from '../../components/Items/Items.jsx';
import { products } from '../../components/Data/Data.jsx';
import { useLocation } from 'react-router-dom';
import Filter from '../../components/Filter/Filter'; // Импортируем Filter
import Footer from '../../components/Footer/Footer'; // Импортируем Footer

const ItemsPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedGenres, setSelectedGenres] = useState([]); // Состояние выбранных жанров
    const location = useLocation();

    const getSearchParams = () => {
        const params = new URLSearchParams(location.search);
        return params.get('search');
    };

    useEffect(() => {
        const query = getSearchParams();
        let filtered = products;

        // Фильтрация по поисковому запросу
        if (query) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.auth.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Фильтрация по выбранным жанрам
        if (selectedGenres.length > 0) {
            filtered = filtered.filter(product => selectedGenres.includes(product.genre));
        }

        setFilteredProducts(filtered);
    }, [location, selectedGenres]);

    const handleGenreChange = (genre) => {
        setSelectedGenres(prevGenres => {
            if (prevGenres.includes(genre)) {
                // Если жанр уже выбран, убираем его из списка
                return prevGenres.filter(g => g !== genre);
            } else {
                // Если жанр не выбран, добавляем его
                return [...prevGenres, genre];
            }
        });
    };

    const handleResetGenres = () => {
        setSelectedGenres([]); // Сброс всех выбранных жанров
    };

    // Получаем все доступные жанры из списка продуктов
    const genres = Array.from(new Set(products.map(product => product.genre)));

    return (
        <div className='pageItem'>
            <Filter
                genres={genres}
                selectedGenres={selectedGenres}
                onGenreChange={handleGenreChange}
                onReset={handleResetGenres} // Передаем функцию сброса
            />
            {filteredProducts.length > 0 ? (
                <Items items={filteredProducts} />
            ) : (
                <p>Книги не найдены</p> // Сообщение, если ничего не найдено
            )}
           
        </div>
    );
};

export default ItemsPage;
