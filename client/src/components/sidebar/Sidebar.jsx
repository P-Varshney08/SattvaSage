import { useState } from 'react';
import { Link } from 'react-router-dom';
import home from './assets/home.png'
import setting from './assets/setting.png'
import notification from './assets/notification.png'
import map from './assets/map.png'
import signin from './assets/signin.png'
import signup from './assets/signup.png'
import logout from './assets/logout.png'
import newCh from './assets/newCh.png'
import { useSelector } from 'react-redux';
import userSlice from '../../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../redux/user/userSlice.js';
import './Sidebar.css'

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const user = useSelector((state)=>state.user.userDetails);
    // console.log('user', user);

    const dispatch = useDispatch();

    const isLogin = !!user;
    const handleLogout = () => {
        console.log('Logging Out');
        dispatch(setUserDetails(null));
        localStorage.removeItem('root');
    }
    return (
        <>
            {/* <div className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300 max-w-full`} > */}
            <div className={`h-screen top-0 bottom-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-[#ffffff] w-64 z-10 py-4 px-6 transition-all duration-300 max-w-full`} >
                <div className=" flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <Link to="/"
                        className="mt-2 text-center w-full inline-block" >
                        <h1 className= "text-[#191919] text-2xl text-bold font-serif">SattvaSage</h1>
                    </Link>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />
                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <Link
                                    to="/"
                                    className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg">
                                    <img src={home} alt="home" className='w-6'/>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    to="/history"
                                    className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg">
                                    <img src={notification} alt="home" className='w-6'/>
                                    History
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    to="/map"
                                    className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg">
                                    <img src={map} alt="home" className='w-6'/>
                                    Map
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    to="/newSession"
                                    className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg">
                                    <img src={newCh} alt="home" className='w-6'/>
                                    New Session
                                </Link>
                            </li>
                            {isLogin ? (
                                <>
                                    <li className="rounded-lg mb-2 text-gray-700">
                                        <button
                                        onClick={handleLogout}
                                            className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg w-full">
                                            <img src={logout} alt="home" className='w-6'/>
                                            LogOut
                                        </button>
                                    </li>
                                </>
                            ): (
                                <>
                                    <li className="rounded-lg mb-2 text-gray-700">
                                        <Link
                                            to="/signin"
                                            className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg">
                                            <img src={signin} alt="home" className='w-6'/>
                                            Login
                                        </Link>
                                    </li>
                                    <li className="rounded-lg mb-2 text-gray-700">
                                        <Link
                                            to="/signup"
                                            className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg">
                                            <img src={signup} alt="home" className='w-6'/>
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                            
                            <li className="rounded-lg mb-2">
                                <Link
                                    to="/setting"
                                    className="flex items-center gap-4 text-md text-gray-700 font-bold px-4 py-3 rounded-lg transition duration-300 hover:bg-gradient-to-br hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:text-black hover:shadow-lg">
                                    <img src={setting} alt="home" className='w-6'/>
                                    Setting
                                </Link>
                            </li>
                            
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            
                            <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                                <Link to='/' className="flex items-center justify-center gap-4 text-sm font-light py-3">
                                    Wisdom towards a pure and balanced life
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
