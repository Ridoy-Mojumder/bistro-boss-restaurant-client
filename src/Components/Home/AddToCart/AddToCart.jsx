import { useEffect, useState } from "react";
import HeadingSection from "../../../Shared/HeadingSection/HeadingSection";

const AddToCart = () => {
    const [popularMenu, setPopularMenu] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                setPopularMenu(data);
            });
    }, []);

    const handleAddToCart = (item) => {
        console.log("Add to cart:", item);
        // Add your add to cart logic here
    };

    const displayedMenu = showAll ? popularMenu : popularMenu.slice(0, 6);

    return (
        <div className="my-8 md:my-20">
            <HeadingSection
                heading="CHEF RECOMMENDS"
                subHeading="---Should Try---"
            ></HeadingSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                {displayedMenu.map(item => (
                    <div key={item._id} className="card border rounded-lg p-5 shadow-lg">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
                        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                        <p className="text-gray-700 mb-2">{item.recipe}</p>
                        <p className="text-lg font-semibold mb-4">${item.price.toFixed(2)}</p>
                        <button 
                            className="text-yellow-500 border-b-2 border-yellow-500 bg-slate-300 w-1/2 mx-auto px-4 py-2 rounded hover:bg-slate-500"
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button 
                    className="text-yellow-500 border-b-2 border-yellow-500 bg-slate-300 px-4 py-2 rounded hover:bg-slate-500"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default AddToCart;
