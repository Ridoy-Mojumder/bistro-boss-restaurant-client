import  { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto my-20">
            <div className="max-w-xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 p-5 border border-gray-200 shadow-xl rounded-xl">
                <div className="flex flex-col items-center text-center p-20">
                    <div className="bg-white p-2 rounded-full shadow-md">
                        <img
                            src={user.photoURL || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-32 h-32 rounded-full"
                        />
                    </div>
                    <h1 className="mt-5 text-2xl font-bold text-white">{user.displayName || 'No Name'}</h1>
                    <p className="text-white mt-2">Email: {user.email}</p>
                    <p className="text-gray-200 mt-1 italic">Join Date: {user.metadata?.creationTime}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
