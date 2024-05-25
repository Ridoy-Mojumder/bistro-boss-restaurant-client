import loginImage from '../../assets/others/authentication2.png';
import backgroundImage from '../../assets/others/authentication.png';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const captcha = form.captcha.value;
        const password = form.password.value;
        console.log(email, captcha, password);



        signIn(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                navigate(from, {replace:true})
                console.log(user);
            })



    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            alert('Captcha Matched');
            setDisable(false)
        }

        else {
            alert('Captcha Does Not Match');
            setDisable(true);
        }
    }




    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | Login</title>
            </Helmet>
            <div className='flex justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className=''>
                    <div className='flex flex-col md:flex-row m-10 bg-white shadow-xl rounded-lg w-full md:w-11/12 ' style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className='md:w-1/2 flex justify-center items-center p-10'>
                            <img src={loginImage} alt="Login Illustration" className='w-full object-cover' />
                        </div>
                        <div className='md:w-1/2 w-full p-8'>
                            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className='mb-4'>
                                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                                    <input type="email" name="email" placeholder="Type here" id="email" className='w-full bg-white mt-2 p-2 border border-gray-300 rounded' />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                                    <input type="password" name="password" placeholder="Enter your password" id="password" className='w-full bg-white mt-2 p-2 border border-gray-300 rounded' />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="captcha" className='block text-gray-700'>Captcha</label>
                                    <div className='mb-4'>
                                        <LoadCanvasTemplate className="" />
                                        <input type="text" ref={captchaRef} name="captcha" placeholder="Type here" id="captcha" className='w-full bg-white mt-2 p-2 border border-gray-300 rounded' />
                                        <button type="button" className='text-blue-500 mt-4 ' onClick={handleValidateCaptcha} >Validate</button>

                                    </div>
                                </div>
                                <button type="submit" disabled={disable} className='w-full bg-[#D1A054] text-white py-2 rounded mt-4'>Sign In</button>
                                <div className='text-center mt-4'>
                                    <a href="#" className='text-blue-500'>New here? <Link to="/signUp">Create a New Account</Link></a>
                                </div>
                                <div className='text-center mt-4'>
                                    <p>Or sign in with</p>
                                    <div className='flex justify-center mt-2 gap-10 font-bold text-3xl'>
                                        <FaFacebook></FaFacebook>
                                        <FaInstagram></FaInstagram>
                                        <FaTwitter></FaTwitter>
                                        <FaGithub></FaGithub>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
