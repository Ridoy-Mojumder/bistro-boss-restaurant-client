

const MenuItem = ({ item }) => {
    const { name, recipe, image,  price } = item;
    return (
        <div className="flex space-x-2">
            <img src={image} alt={name} className="w-[100px] rounded-r-full rounded-bl-full h-[100px]"/>
            <div>
                <h3 className="text-2xl">{name}</h3>
                <p className="text-sm">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;