// src/components/Filter/Filter.jsx
import React from 'react';
import './Filter.css';

const Filter = ({ genres, selectedGenres, onGenreChange, onReset }) => {
    return (
        <div className="filter-container">
            <button
                className={`filter-button ${selectedGenres.length === 0 ? 'active' : ''}`}
                onClick={onReset}
            >
                Все
            </button>
            {genres.map((genre, index) => (
                <button
                    key={index}
                    className={`filter-button ${selectedGenres.includes(genre) ? 'active' : ''}`}
                    onClick={() => onGenreChange(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
};

export default Filter;
