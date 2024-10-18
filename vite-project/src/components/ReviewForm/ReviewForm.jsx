// src/components/Reviews/ReviewForm.jsx
import React, { useState } from 'react';
import './ReviewForm.css'; // Добавьте стили для формы (при необходимости)

const ReviewForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(0); // Хранит текущий рейтинг
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert('Пожалуйста, выберите рейтинг.'); // Проверка, чтобы убедиться, что рейтинг выбран
            return;
        }

        const newReview = {
            user: {
                name: 'Имя пользователя',
                avatar: '/path/to/avatar.png', 
            },
            date: new Date().toLocaleDateString(),
            rating,
            comment,
        };
        onSubmit(newReview);
        // setRating(0);
        setComment('');
    };

    return (
        <div className="review-form">
            <h2>Поделитесь своим мнением!</h2>
            <p>Ваш отзыв может изменить выбор других.</p>
           
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ваши впечатления о книге..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <button type="submit">Поделиться впечатлением</button>
            </form>
        </div>
    );
};

export default ReviewForm;
