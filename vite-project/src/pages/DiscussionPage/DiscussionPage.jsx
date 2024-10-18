import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../components/Data/Data.jsx';
import FormAnswer from '../../components/FormAnswer/FormAnswer'; // Import the FormAnswer component
import './DiscussionPage.css';
import '../../components/Reviews/Reviews.css';

const DiscussionPage = () => {
    const { id, questionIndex } = useParams();
    const product = products.find(item => item.id === parseInt(id));

    // Проверка, существует ли обсуждение
    if (!product || !product.discussion[parseInt(questionIndex)]) {
        return <h2>Обсуждение не найдено</h2>;
    }

    const discussionIndex = parseInt(questionIndex);
    const discussion = product.discussion[discussionIndex];

    // State to hold answers
    const [answers, setAnswers] = useState(discussion.answers);

    // Handle new answer submission
    const handleNewAnswer = (newAnswer) => {
        setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
        // Optionally, you can also update the original product data here if needed
        // product.discussion[discussionIndex].answers.push(newAnswer);
    };

    const handleFavoriteToggle = () => {
        setIsFavorite((prev) => !prev);
        
        // Optionally, you can also update the original product data here if needed
        // product.discussion[discussionIndex].isFavorite = !isFavorite;
    };
    const [isFavorite, setIsFavorite] = useState(false); 

    return (
        <div className="discussion-page">
            <div className="discussion-ques">
                <div className="disc-about">
                    <div className="discus">
                        <img src={product.image} alt={`Обложка книги ${product.name}`} className="book-cover" />
                        <div>
                            <p>{product.name}</p>
                            <p className='count'>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.675 14.7575C12.4425 14.7575 12.21 14.69 12.0075 14.555L11.2875 14.0825C11.085 13.9475 10.9875 13.6925 11.055 13.46C11.1075 13.2875 11.13 13.085 11.13 12.86V9.80748C11.13 8.58498 10.365 7.82001 9.1425 7.82001H4.05C3.96 7.82001 3.8775 7.82752 3.795 7.83502C3.6375 7.84252 3.4875 7.79001 3.3675 7.68501C3.2475 7.58001 3.1875 7.43002 3.1875 7.27252V5.19501C3.1875 2.99001 4.7325 1.44501 6.9375 1.44501H13.3125C15.5175 1.44501 17.0625 2.99001 17.0625 5.19501V9.01999C17.0625 10.1075 16.695 11.0675 16.02 11.7275C15.48 12.275 14.73 12.6275 13.875 12.7325V13.565C13.875 14.015 13.6275 14.42 13.2375 14.63C13.0575 14.7125 12.8625 14.7575 12.675 14.7575ZM12.225 13.3475L12.7125 13.625C12.7575 13.6025 12.7575 13.565 12.7575 13.5575V12.2C12.7575 11.8925 13.0125 11.6375 13.32 11.6375C14.1075 11.6375 14.775 11.39 15.2325 10.925C15.705 10.46 15.945 9.79998 15.945 9.01248V5.1875C15.945 3.59 14.9175 2.5625 13.32 2.5625H6.945C5.3475 2.5625 4.32 3.59 4.32 5.1875V6.6875H9.15C10.98 6.6875 12.2625 7.97002 12.2625 9.80002V12.8525C12.255 13.025 12.2475 13.19 12.225 13.3475Z" fill="#CAC4C4" />
                                    <path d="M4.55251 17.5625C4.38751 17.5625 4.215 17.525 4.0575 17.4425C3.705 17.255 3.4875 16.895 3.4875 16.49V15.92C2.8275 15.815 2.2425 15.5375 1.8075 15.1025C1.2375 14.5325 0.9375 13.7525 0.9375 12.8525V9.80002C0.9375 8.10502 2.04749 6.86001 3.69749 6.70251C3.81749 6.69501 3.93 6.6875 4.05 6.6875H9.1425C10.9725 6.6875 12.255 7.97002 12.255 9.80002V12.8525C12.255 13.1825 12.2175 13.49 12.135 13.7675C11.7975 15.1175 10.65 15.965 9.1425 15.965H7.275L5.1525 17.375C4.9725 17.5025 4.76251 17.5625 4.55251 17.5625ZM4.05 7.8125C3.96 7.8125 3.8775 7.82001 3.795 7.82751C2.715 7.92501 2.0625 8.66752 2.0625 9.80002V12.8525C2.0625 13.4525 2.25 13.955 2.6025 14.3075C2.9475 14.6525 3.45 14.84 4.05 14.84C4.3575 14.84 4.6125 15.095 4.6125 15.4025V16.385L6.7875 14.9375C6.8775 14.8775 6.99 14.84 7.1025 14.84H9.1425C10.1325 14.84 10.83 14.345 11.0475 13.475C11.1 13.2875 11.13 13.0775 11.13 12.8525V9.80002C11.13 8.57752 10.365 7.8125 9.1425 7.8125H4.05Z" fill="#CAC4C4" />
                                </svg>
                                {answers.length} ответов
                            </p>
                        </div>
                    </div>
                    <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={handleFavoriteToggle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill={isFavorite ? "white" : "#B584DE"} />
                        </svg>
                    </button>
                </div>
                <h2>{discussion.question}</h2>
                <p className='date'>{discussion.user.date}</p>
            </div>
            {/* Render the FormAnswer component */}
            <FormAnswer onSubmit={handleNewAnswer} />

            <div className="reviews">
                {answers.map((answer, index) => (
                    <div key={index} className="review">
                        <img
                            src={answer.avatar}
                            alt={`${answer.user}'s avatar`}
                            className="answer-avatar"
                        />
                        <div className="review-content">
                            <p><strong>{answer.user}</strong> <span>{answer.date}</span></p>
                            <p className='reviewp'>{answer.answer}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default DiscussionPage;
