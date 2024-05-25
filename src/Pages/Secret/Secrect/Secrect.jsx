

const Secret = () => {
    return (
        <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">🔒 Welcome to the Secret Page! 🔒</h1>
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/nk9npZC/tomato-cheese-copy-food-meal-black-space-fast-italian-background-pizza-mozzarella-food-generative-ai.jpg" alt="Secret Illustration" className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg" />
            </div>
            <p className="text-lg text-center text-gray-600 mt-6">Congratulations! You have discovered the secret page. 🎉</p>
            <p className="text-lg text-center text-gray-600 mt-2">This is a restricted area. Keep it safe! 🤫</p>
        </div>
    );
};

export default Secret;
