// src/pages/Discussions/Discussions.jsx
import React from 'react';
import { products } from '../../components/Data/Data.jsx'; // Предполагается, что данные о книгах находятся здесь
import Discussion from '../../components/Discussion/Discussion';
import './Discussions.css';

const Discussions = () => {
    // Предполагаем, что вы хотите отображать обсуждения для всех книг
    return (
        <div className="discussions-page">
            <h2>Обсуждения34</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name} - Обсуждения</h3>
                    {product.discussion.map((d, index) => (
                        <Discussion key={index} question={d.question} answers={d.answers} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Discussions;
