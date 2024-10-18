import {useState} from "react";

export default function Slider({slides}){

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        )
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        )
    }

    return (
        <>
            <div className="slider">
                <div className="slider-wrapper">
                    {
                        slides.map( (slide, index) => (
                            <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>

                                { index === currentSlide && (

                                    <>
                                        <img src={ slide.image } alt=""/>
                                        <h2>{ slide.title }</h2>
                                    </>

                                ) }

                            </div>
                        ) )
                    }
                </div>

                <button onClick={prevSlide} className='prev'>Назад</button>
                <button onClick={nextSlide} className='next'>Вперед</button>

            </div>
        </>
    )
}