import { Helmet } from "react-helmet";
import Cover from "../../../Shared/Cover/Cover";
import HeadingSection from "../../../Shared/HeadingSection/HeadingSection";
import { useEffect, useState } from "react";
import Desserts from "../Desserts/Desserts";
import Pizza from "../Pizza/Pizza";
import Salad from "../Salad/Salad";
import Soup from "../Soup/Soup";


const Menu = () => {

    const [popularMenu, setPopularMenu] = useState([])
    const [showAll, setShowAll] = useState(false);


    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.price <= 11)
                setPopularMenu(popularItem);
            })
    }, [])

    const displayedMenu = showAll ? popularMenu : popularMenu.slice(0, 6);



    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | menu</title>
            </Helmet>
            <Cover heading="OUR MENU" subHeading="Would you like to try a dish?" image="https://i.ibb.co/tp89j9m/banner3.jpg"></Cover>
            <HeadingSection heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></HeadingSection>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-7 m-10 mb-20">
                {
                    displayedMenu.map(item => <div
                        key={item._id} className="flex space-x-2"
                    >
                        <img src={item.image} className="w-[100px] rounded-r-full rounded-bl-full h-[100px]" />
                        <div>
                            <h3 className="text-2xl">{item.name}</h3>
                            <p className="text-sm">{item.recipe}</p>
                        </div>
                        <p className="text-yellow-600">${item.price}</p>
                    </div>)
                }
            </div>

            <div className="flex justify-center mb-20">
                {!showAll &&
                    < button
                        className="text-yellow-500 border-b-2 border-yellow-500 bg-none px-4 py-2 rounded hover:bg-slate-300 lg:w-1/6"
                        onClick={() => setShowAll(!showAll)}
                    >
                        View Full Menu
                    </button>
                }
            </div>
            <Desserts></Desserts>
            <Pizza></Pizza>
            <Salad></Salad>
            <Soup></Soup>




        </div>
    );
};

export default Menu;