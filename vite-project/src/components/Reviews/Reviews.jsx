// src/components/Reviews/Reviews.jsx
import React from 'react';
import './Reviews.css'; // Вы можете добавить стиль для отзывов

const Reviews = ({ reviews }) => {
    return (
        <>
         <h2>Отзывы</h2>
        <div className="reviews">
           
            {reviews.map((review, index) => (
                <div className="review" key={index}>
                    <img src={review.user.avatar} alt={`${review.user.name}'s avatar`} className="avatar" />
                    <div className="review-content">
                        <p><strong>{review.user.name}</strong> <span>{review.date}</span></p>
                        {/* <p className='rev'>{review.rating} ⭐</p> */}
                        <p className='reviewp'>{review.comment}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Reviews;
