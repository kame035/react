// Search.jsx
import './Search.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import Modal from '../Modal/Modal.jsx'; // Убедитесь, что путь к модальному компоненту правильный

export default function Search() {
  const [query, setQuery] = useState(''); // Убираем дублирование состояния
  const [isModalOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Создаем объект для навигации

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSearch = (event) => {
    event.preventDefault(); // Остановка стандартного поведения формы
    if (query.trim()) { // Проверяем, что строка не пустая
      navigate(`/items?search=${encodeURIComponent(query)}`); // Перенаправляем на ItemsPage с параметром поиска
    }
  };

  return (
    <div className='search'>
      <form onSubmit={handleSearch}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="currentColor" />
          <path d="M21.9995 22.75C21.8095 22.75 21.6195 22.68 21.4695 22.53L19.4695 20.53C19.1795 20.24 19.1795 19.76 19.4695 19.47C19.7595 19.18 20.2395 19.18 20.5295 19.47L22.5295 21.47C22.8195 21.76 22.8195 22.24 22.5295 22.53C22.3795 22.68 22.1895 22.75 21.9995 22.75Z" fill="currentColor" />
        </svg>
        <input type="text" value={query}
          onChange={(e) => setQuery(e.target.value)} // Устанавливаем состояние query
          placeholder="Введите, чтобы найти"
        />
      </form>
      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Это модальное окно</h2>
        <p>Здесь будет контент</p>
      </Modal>
    </div>
  );
}
