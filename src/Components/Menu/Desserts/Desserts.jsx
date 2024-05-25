import { useEffect, useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import { Link } from "react-router-dom";


const Desserts = () => {

    const [popularMenu, setPopularMenu] = useState([])
    const [showAll, setShowAll] = useState(false);


    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "dessert")
                setPopularMenu(popularItem);
            })
    }, [])

    const displayedMenu = showAll ? popularMenu : popularMenu.slice(0, 6);



    return (
        <div>

            <div className="md:my-20 my-8">
                <Cover heading="DESSERTS" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." image="https://i.ibb.co/x5YmCNp/dessert-bg.jpg"></Cover>
            </div>

            <div className="flex justify-center my-10">
                <Link to={`/order/dessert`}>
                    <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                        Order Our Food
                    </button>
                </Link>
            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 gap-7 m-10 my-20">
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
        </div>
    );
};

export default Desserts;