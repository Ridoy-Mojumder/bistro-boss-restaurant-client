import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet";

const Order = () => {
    const { category } = useParams();
    const [tabIndex, setTabIndex] = useState(0);
    const [dessertItems, setDessertItems] = useState([]);
    const [pizzaItems, setPizzaItems] = useState([]);
    const [saladItems, setSaladItems] = useState([]);
    const [soupItems, setSoupItems] = useState([]);
    const [drinksItems, setDrinksItems] = useState([]);

    const categoryMap = {
        desserts: 0,
        pizza: 1,
        salad: 2,
        soup: 3,
        drinks: 4,
    };

    useEffect(() => {
        if (category && categoryMap[category] !== undefined) {
            setTabIndex(categoryMap[category]);
        }
    }, [category]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const dessert = data.filter(item => item.category === "dessert");
                setDessertItems(dessert);
                const pizza = data.filter(item => item.category === "pizza");
                setPizzaItems(pizza);
                const salad = data.filter(item => item.category === "salad");
                setSaladItems(salad);
                const soup = data.filter(item => item.category === "soup");
                setSoupItems(soup);
                const drinks = data.filter(item => item.category === "drinks");
                setDrinksItems(drinks);
            });
    }, []);

    const handleAddToCart = (item) => {
        console.log("Add to cart:", item);
        // Add your add to cart logic here
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | Order Food</title>
            </Helmet>
            <Cover image="https://i.ibb.co/L167HJT/banner2.jpg" heading="Order Food" subHeading="You can order our food"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center mt-4">
                    <Tab className={`px-4 py-2 m-2 rounded cursor-pointer ${tabIndex === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>DESSERTS</Tab>
                    <Tab className={`px-4 py-2 m-2 rounded cursor-pointer ${tabIndex === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>PIZZA</Tab>
                    <Tab className={`px-4 py-2 m-2 rounded cursor-pointer ${tabIndex === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>SALAD</Tab>
                    <Tab className={`px-4 py-2 m-2 rounded cursor-pointer ${tabIndex === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>SOUP</Tab>
                    <Tab className={`px-4 py-2 m-2 rounded cursor-pointer ${tabIndex === 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {dessertItems.map(item => (
                            <div key={item._id} className="card border rounded-lg p-5 shadow-lg">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded relative" />
                                <p className="text-lg font-semibold mb-4 absolute bg-black text-white top-8 right-10 p-2">${item.price.toFixed(2)}</p>
                                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                <p className="text-gray-700 mb-2">{item.recipe}</p>
                                <button
                                    className="text-yellow-500 border-b-2 border-yellow-500 bg-slate-300 w-1/2 mx-auto px-4 py-2 rounded hover:bg-slate-500"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {pizzaItems.map(item => (
                            <div key={item._id} className="card border rounded-lg p-5 shadow-lg">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded relative" />
                                <p className="text-lg font-semibold mb-4 absolute bg-black p-2 text-white top-8 right-10">${item.price.toFixed(2)}</p>
                                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                <p className="text-gray-700 mb-2">{item.recipe}</p>
                                <button
                                    className="text-yellow-500 border-b-2 border-yellow-500 bg-slate-300 w-1/2 mx-auto px-4 py-2 rounded hover:bg-slate-500"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {saladItems.map(item => (
                            <div key={item._id} className="card border rounded-lg p-5 shadow-lg">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded relative" />
                                <p className="text-lg font-semibold mb-4 absolute bg-black p-2 text-white top-8 right-10">${item.price.toFixed(2)}</p>
                                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                <p className="text-gray-700 mb-2">{item.recipe}</p>
                                <button
                                    className="text-yellow-500 border-b-2 border-yellow-500 bg-slate-300 w-1/2 mx-auto px-4 py-2 rounded hover:bg-slate-500"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {soupItems.map(item => (
                            <div key={item._id} className="card border rounded-lg p-5 shadow-lg">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded relative" />
                                <p className="text-lg font-semibold mb-4 absolute bg-black p-2 text-white top-8 right-10">${item.price.toFixed(2)}</p>
                                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                <p className="text-gray-700 mb-2">{item.recipe}</p>
                                <button
                                    className="text-yellow-500 border-b-2 border-yellow-500 bg-slate-300 w-1/2 mx-auto px-4 py-2 rounded hover:bg-slate-500"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {drinksItems.map(item => (
                            <div key={item._id} className="card border rounded-lg p-5 shadow-lg">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded relative" />
                                <p className="text-lg font-semibold mb-4 absolute bg-black p-2 text-white top-8 right-10">${item.price.toFixed(2)}</p>
                                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                                <p className="text-gray-700 mb-2">{item.recipe}</p>
                                <button
                                    className="text-yellow-500 border-b-2 border-yellow-500 bg-slate-300 w-1/2 mx-auto px-4 py-2 rounded hover:bg-slate-500"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
