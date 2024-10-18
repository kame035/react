// src/components/Advice/Advice.jsx
import React from 'react';
import Items from '../Items/Items';
import '../Items/Items.css'

const Advice = ({ similarBooks }) => {
    return (
        <div className="advice">
            <h2>Похожие</h2>
            <Items items={similarBooks} />
        </div>
    );
};

export default Advice;
