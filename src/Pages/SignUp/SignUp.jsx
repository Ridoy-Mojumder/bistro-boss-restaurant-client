import signUpImage from '../../assets/others/authentication2.png';
import backgroundImage from '../../assets/others/authentication.png';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { createUser, updatedProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then((user) => {
                navigate('/login')
                console.log("User created:", user.user);
                updatedProfile(data.name,data.photoURL)
                .then(() => {
                    console.log("User profile info Updated")
                    reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'User created successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                })
                .catch((error)=>{
                    console.log(error);
                })
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error("Error creating user:", error);
            });
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | SignUp</title>
            </Helmet>
            <div className='flex justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className=''>
                    <div className='flex flex-col md:flex-row-reverse m-10 bg-white shadow-xl rounded-lg w-full md:w-11/12 ' style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className='md:w-1/2 flex justify-center items-center p-10'>
                            <img src={signUpImage} alt="Sign Up Illustration" className='w-full object-cover' />
                        </div>
                        <div className='md:w-1/2 w-full p-8'>
                            <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-4'>
                                    <label htmlFor="name" className='block text-gray-700'>Name</label>
                                    <input type="text" name="name"  {...register("name", { required: true })} placeholder="Type your name" id="name" className='w-full bg-white mt-2 p-2 border border-gray-300 rounded' />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                                    <input type="email" name="email"  {...register("email", { required: true })} placeholder="Type your email" id="email" className='w-full bg-white mt-2 p-2 border border-gray-300 rounded' />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                                    <input type="password" name="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: {
                                            value: /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
                                            message: "Password must contain at least one uppercase letters, one special character, one digits, and one lowercase letters"
                                        }
                                    })} placeholder="Enter your password" id="password" className='w-full bg-white mt-2 p-2 border border-gray-300 rounded' />
                                    {errors.password?.type === 'required' && (
                                        <span className='text-red-600'>Password is required</span>
                                    )}
                                    {errors.password?.type === 'minLength' && (
                                        <span className='text-red-600'>Password must be at least 6 characters</span>
                                    )}
                                    {errors.password?.type === 'maxLength' && (
                                        <span className='text-red-600'>Password must be less than or equal to 20 characters</span>
                                    )}
                                    {errors.password?.type === 'pattern' && (
                                        <span className='text-red-600'>{errors.password.message}</span>
                                    )}
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="photoURL" className='block text-gray-700'>Photo URL</label>
                                    <input type="text" name="photoURL"  {...register("photoURL", { required: true })} placeholder="Enter your photo URL" id="photoURL" className='w-full bg-white mt-2 p-2 border border-gray-300 rounded' />
                                    {errors.photoURL && <span className='text-red-600'>PhotoURL is required</span>}
                                </div>
                                <button type="submit" className='w-full bg-[#D1A054] text-white py-2 rounded mt-4'>Sign Up</button>
                                <div className='text-center mt-4'>
                                    <a href="#" className='text-blue-500'>Already have an account? <Link to="/login">Login here</Link></a>
                                </div>
                                <div className='text-center mt-4'>
                                    <p>Or sign up with</p>
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

export default SignUp;
