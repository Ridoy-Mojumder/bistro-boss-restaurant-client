import { Carousel } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerSection = () => {
    return (
        <Carousel >
                <div>
                    <img src="https://i.ibb.co/NLc9bpn/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/m9Z1JK6/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/KFQGbNm/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/wQMhDVx/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/mFGmvfy/06.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/yN6ppRq/04.jpg" />
                </div>
            </Carousel>
    );
};

export default BannerSection;