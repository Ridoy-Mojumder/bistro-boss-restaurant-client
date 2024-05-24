
import Lottie from 'react-lottie';
import animationData from './Animation - 1716063647847.json';  // Import your Lottie animation file
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <Helmet>
                <title>Bistro Boss Restaurant | Error Page</title>
            </Helmet>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
            <h1 className="text-2xl text-white mt-4">Oops! Something went wrong.</h1>
            <Link to='/'>
                <button className="btn bg-yellow-700 border-none text-white w-36">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
