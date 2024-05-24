import { Helmet } from "react-helmet";
import Category from "../../Pages/Category/Category";
import BistroBoss from "../../Shared/BistroBoss/BistroBoss";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import AddToCart from "./AddToCart/AddToCart";
import BannerSection from "./BannerSection/BannerSection";
import CallUs from "./CallUs/CallUs";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | Home</title>
            </Helmet>
            <BannerSection></BannerSection>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <AddToCart></AddToCart>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;