// src/components/FormAnswer/FormAnswer.jsx
import React, { useState } from 'react';
import '../ReviewForm/ReviewForm.css'

const FormAnswer = ({ onSubmit }) => {
    const [user, setUser] = useState('');
    const [avatar, setAvatar] = useState('');
    const [answer, setAnswer] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create answer object to be sent
        const newAnswer = { user, avatar, answer, date };
        onSubmit(newAnswer);
        // Reset form fields
        setUser('');
        setAvatar('');
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit} className="review-form answer-form">
            <h2>Что вы думаете об этом?</h2>
            <p>Дайте свой ответ!</p>
            <input
                type="text"
                placeholder="Введите ответ..."
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
            />
            <button type="submit">Отправить ответ</button>
        </form>
    );
};

export default FormAnswer;
