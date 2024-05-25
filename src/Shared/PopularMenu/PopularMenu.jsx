import { useEffect, useState } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import MenuItem from "../MenuItem/MenuItem";


const PopularMenu = () => {

    const [popularMenu, setPopularMenu] = useState([])
    const [showAll, setShowAll] = useState(false);


    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "popular")
                setPopularMenu(popularItem);
            })
    }, [])

    const displayedMenu = showAll ? popularMenu : popularMenu.slice(0, 6);
    return (
        <div>
            <HeadingSection
                heading="FROM OUR MENU" subHeading="---Check it out---"
            ></HeadingSection>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-7 m-10 mb-20">
                {
                    displayedMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-4">
                {!showAll &&
                    < button
                        className="text-yellow-500 border-b-2 border-yellow-500 bg-none px-4 py-2 rounded hover:bg-slate-300 w-1/6"
                        onClick={() => setShowAll(!showAll)}
                    >
                        View Full Menu
                    </button>
                }
            </div>
        </div >
    );
};

export default PopularMenu;