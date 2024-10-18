import React, { useState } from 'react';
import './FormQuestion.css'; // Используем существующие стили или создаем новый файл стилей, если нужно
import '../ReviewForm/ReviewForm.css'

const FormQuestion = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question.trim()) {
            alert('Пожалуйста, введите ваш вопрос.');
            return;
        }

        const newQuestion = {
            user: {
                name: 'Имя пользователя',
                avatar: '/path/to/avatar.png',
            },
            date: new Date().toLocaleDateString(),
            question,
            answers: [],
        };

        onSubmit(newQuestion);
        setQuestion('');
    };

    return (
        <div className="review-form ques-form">
            <h2>Задайте вопрос по книге!</h2>
            <p>Ваш вопрос может быть полезен другим читателям.</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ваш вопрос..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
                <button type="submit">Задать вопрос</button>
            </form>
        </div>
    );
};

export default FormQuestion;
