import { useEffect, useState } from "react";
import HeadingSection from "../../../Shared/HeadingSection/HeadingSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    // const renderStars = (rating) => {
    //     const stars = [];
    //     for (let i = 1; i <= 5; i++) {
    //         stars.push(
    //             <input
    //                 key={i}
    //                 type="radio"
    //                 name={`rating-${rating}`}
    //                 className={`mask mask-star-2 ${i <= rating ? 'bg-orange-400' : 'bg-gray-500'}`}
    //                 checked={i <= rating}
    //                 readOnly
    //             />
    //         );
    //     }
    //     return stars;
    // };

    return (
        <div className="my-8 md:my-20">
            <HeadingSection heading="TESTIMONIALS" subHeading="---What Our Clients Say---" />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-4">
                {reviews.map(review => (
                    <SwiperSlide key={review._id} className="px-10 md:px-20">
                        <div className="rating flex space-x-2 text-center justify-center items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                        </div>
                        <div className="flex justify-center items-center text-9xl my-4 text-center">
                            <RiDoubleQuotesL />
                        </div>
                        <p className="text-center py-4">{review.details}</p>
                        <h3 className="text-3xl mt-4 text-orange-600 text-center">{review.name}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
