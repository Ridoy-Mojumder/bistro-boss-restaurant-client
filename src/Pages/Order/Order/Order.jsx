import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet";
import ReactPaginate from 'react-paginate';

const Order = () => {
    const { category } = useParams();
    const [tabIndex, setTabIndex] = useState(0);
    const [dessertItems, setDessertItems] = useState([]);
    const [pizzaItems, setPizzaItems] = useState([]);
    const [saladItems, setSaladItems] = useState([]);
    const [soupItems, setSoupItems] = useState([]);
    const [drinksItems, setDrinksItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 6; // Number of items to display per page

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
        fetch("http://localhost:5000/menu")
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

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const renderItems = (items) => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex).map(item => (
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
        ));
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
                        {renderItems(dessertItems)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {renderItems(pizzaItems)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {renderItems(saladItems)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {renderItems(soupItems)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 m-10 mb-20">
                        {renderItems(drinksItems)}
                    </div>
                </TabPanel>
            </Tabs>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={Math.ceil(dessertItems.length / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName={"flex justify-center mt-4"}
                pageClassName={"px-2 py-1 mx-1 rounded cursor-pointer bg-blue-500 text-white"}
                activeClassName={"bg-yellow-500"}
                previousClassName={"px-4 py-2 mx-1 rounded cursor-pointer bg-blue-500 text-white"}
                nextClassName={"px-4 py-2 mx-1 rounded cursor-pointer bg-blue-500 text-white"}
                disabledClassName={"px-2 py-1 mx-1 rounded cursor-not-allowed bg-gray-300 text-gray-500"}
            />
        </div>
    );
};

export default Order;

