import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pb-5">
            <div className="flex flex-col md:flex-row justify-center items-center mb-8">
                <div className="w-full md:w-1/2 text-center bg-[#1F2937] h-96 flex flex-col justify-center items-center p-4">
                    <h1 className="text-3xl mb-4">CONTACT US</h1>
                    <p className="mb-2">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="mb-2">+88 123456789</p>
                    <p className="mb-2">
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00
                    </p>
                </div>
                <div className="w-full md:w-1/2 text-center bg-[#111827] h-96 flex flex-col justify-center items-center p-4">
                    <h1 className="text-3xl mb-4">Follow US</h1>
                    <p className="mb-4">Join us on social media</p>
                    <div className="flex justify-center gap-5 items-center">
                        <FaFacebook size={40} />
                        <FaInstagram size={40} />
                        <FaTwitter size={40} />
                    </div>
                </div>
            </div>
            <div className="text-center ">
                <p className="text-sm p-5">&copy; {currentYear} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
