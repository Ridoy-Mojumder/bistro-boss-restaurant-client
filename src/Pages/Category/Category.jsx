import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from './../../../src/assets/home/slide1.jpg'
import slide5 from './../../../src/assets/home/slide5.jpg'
import HeadingSection from '../../Shared/HeadingSection/HeadingSection';

const Category = () => {
    return (
        <div className='my-8 md:my-20'>
            <HeadingSection heading={"ORDER ONLINE"} subHeading = {"---From 11:00am to 10:00pm---"}></HeadingSection>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt=""  />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Y8WdLF2/slide3.jpg" alt="" />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Soup</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/MZ3BgDC/slide4.jpg" alt="" />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Cake</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZVKXXv9/slide2.jpg" alt="" />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/MZ3BgDC/slide4.jpg" alt="" />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZVKXXv9/slide2.jpg" alt="" />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Y8WdLF2/slide3.jpg" alt="" />
                    <h1 className="text-4xl text-center -mt-24 text-white shadow-2xl ">Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/MZ3BgDC/slide4.jpg" alt="" />
                    <h1 className="text-4xl text-center -mt-20 text-white shadow-2xl ">Salad</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;