import  { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Thank you for contacting us!',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
        });

        setFormData({name: '', email: '', message: ''});
    };

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/random/1024x768?business")' }}>
            <div className="backdrop-blur-sm backdrop-brightness-75 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full my-28">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 transition duration-200"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 transition duration-200"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows="4"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 transition duration-200"
                        />
                        <button type="submit" className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
                            Send Message
                        </button>
                    </form>
                    <div className="text-sm text-gray-600 mt-4 text-center">
                        <p>Call us: +123 456 7890</p>
                        <p>Email: contact@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
