import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import './Home.css';
import { products } from '../../components/Data/Data.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="home-text">
                    <h1>Оценивай прочитанное <br />
                        и делись своими эмоциями</h1>
                    <p>PagePal — это удобная платформа для любителей чтения, где можно отмечать прочитанные книги, выставлять оценки и делиться впечатлениями с другими пользователями. Сохраняйте свою книжную историю и открывайте для себя новые произведения по рекомендациям.</p>
                </div>
                <div className="swiper-container">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={10}
                        slidesPerView="auto"
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            901: { slidesPerView: 2.5 },
                            1000: { slidesPerView: 2 },
                        }}
                    >
                        {products.slice(0, 7).map((product) => (
                            <SwiperSlide key={product.id} style={{ minWidth: '200px' }}>
                                <Link to={`/book/${product.id}`} className="slide-content">
                                    <img src={product.image} alt={product.name} className="slide-image" />
                                    <p className="slide-author">{product.auth}</p>
                                    <h4 className="slide-title">{product.name}</h4>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="input-email py radius">
                <img src="../src/assets/home/item.png" alt="" />
            </div>
        </>
    );
}
