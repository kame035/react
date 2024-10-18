// src/pages/Book/Book.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../components/Data/Data.jsx';
import Reviews from '../../components/Reviews/Reviews';
import Discussion from '../../components/Discussion/Discussion';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import FormQuestion from '../../components/FormQuestion/FormQuestion';
import Advice from '../../components/Advice/Advice'; // Импортируем Advice
import './Book.css';

const Book = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    const [isRead, setIsRead] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showExpandButton, setShowExpandButton] = useState(false);
    const [currentView, setCurrentView] = useState('description');

    const descRef = useRef(null);

    useEffect(() => {
        if (descRef.current) {
            const lineHeight = parseFloat(getComputedStyle(descRef.current).lineHeight);
            const maxLinesHeight = lineHeight * 6;

            if (descRef.current.scrollHeight > maxLinesHeight) {
                setShowExpandButton(true);
            }
        }
    }, [product]);

    const handleReadToggle = () => {
        setIsRead((prev) => !prev);
    };

    const handleFavoriteToggle = () => {
        setIsFavorite((prev) => !prev);
    };

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    const handleViewChange = (view) => {
        setCurrentView(view);
    };

    const handleReviewSubmit = (newReview) => {
        console.log('Новый отзыв:', newReview);
    };

    const handleQuestionSubmit = (newQuestion) => {
        product.discussion.push(newQuestion);
    };

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    // Filter books based on the genre of the current book
    const similarBooks = products.filter((item) =>
        item.genre === product.genre && item.id !== product.id // Exclude the current book
    ).slice(0,); // Get only the first 4 similar books

    return (
        <div className='item-full'>
            <div className="item-book">
                <div className="item-img">
                    <img src={product.image} alt={product.auth} />
                </div>
                <div className="item-about">
                    <p className='auth'>{product.auth}</p>
                    <div className="ab-item">
                        <h3>{product.name}</h3>
                        <p>{product.genre}</p>
                    </div>
                    <div className="buttons">
                        <button onClick={handleReadToggle} className={isRead ? 'button-read' : 'button-unread'}>
                            {isRead ? 'Прочитано' : 'Не прочитано'}
                        </button>
                        <button onClick={handleFavoriteToggle} className={isFavorite ? 'button-favorite' : 'button-not-favorite'}>
                            <svg width="25" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={isFavorite ? "white" : "#D9D9D9"} />
                            </svg>
                        </button>
                    </div>

                    <div className="nav-book p">
                        <a
                            href="#"
                            className={currentView === 'description' ? 'active' : ''}
                            onClick={() => handleViewChange('description')}
                        >
                            О книге
                        </a>
                        <a
                            href="#"
                            className={currentView === 'reviews' ? 'active' : ''}
                            onClick={() => handleViewChange('reviews')}
                        >Отзывы</a>
                        <a
                            href="#"
                            className={currentView === 'discussion' ? 'active' : ''}
                            onClick={() => handleViewChange('discussion')}
                        >
                            Обсуждения
                        </a>
                    </div>

                    <div className="desc-full">
                        {currentView === 'description' && (
                            <div className="desc">
                                <div className={`description ${isExpanded ? 'expanded' : ''}`} ref={descRef}>
                                    <p>{product.description}</p>
                                </div>

                                {showExpandButton && (
                                    <button className='btn' onClick={toggleExpand}>
                                        {isExpanded ? 'Свернуть' : 'Еще'}
                                    </button>
                                )}
                                <p className='p p-a'>Возрастные ограничения: <span>{product.age}+</span></p>
                                <p className='p p-a'>Издательство: <span>{product.publish}</span></p>

                                <Link to="/discussion" className="add-rev">
                                    <h2>Уже прочитали? <br /> Вступайте в обсуждения!</h2>
                                    <div className="plus">
                                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M42.75 30.2812H14.25C13.2763 30.2812 12.4688 29.4737 12.4688 28.5C12.4688 27.5263 13.2763 26.7188 14.25 26.7188H42.75C43.7237 26.7188 44.5312 27.5263 44.5312 28.5C44.5312 29.4737 43.7237 30.2812 42.75 30.2812Z" fill="#292D32" />
                                            <path d="M28.5 44.5312C27.5263 44.5312 26.7188 43.7237 26.7188 42.75V14.25C26.7188 13.2763 27.5263 12.4688 28.5 12.4688C29.4737 12.4688 30.2812 13.2763 30.2812 14.25V42.75C30.2812 43.7237 29.4737 44.5312 28.5 44.5312Z" fill="#292D32" />
                                        </svg>
                                    </div>
                                </Link>

                                <ReviewForm onSubmit={handleReviewSubmit} />

                                <Reviews reviews={product.reviews.slice(0, 3)} />
                            </div>
                        )}

                        {currentView === 'reviews' && (
                            <Reviews reviews={product.reviews} />
                        )}

                        {currentView === 'discussion' && (
                            <>
                                <FormQuestion onSubmit={handleQuestionSubmit} />
                                <Discussion discussions={product.discussion} bookId={product.id} />
                            </>
                        )}
                    </div>
                    <Advice similarBooks={similarBooks} /> {/* Передаем схожие книги в компонент Advice */}
                </div>

                <div className="read">
                    <p>Купили: {product.bought} человек</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
