
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import logoOfWebsite from "../../public/logos.png"
// import user2 from "@/assets/user.png"
// import useAuth from '@/hooks/useAuth';
// import { Button } from '@/components/ui/button';
// import useRole from '@/hooks/useRole';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// import { FaAngleDown } from "react-icons/fa6";
// import { ModeToggle } from '@/components/mode-toggle';


// function Navbar() {
//     const { user, loading, logOut, isSubscribe } = useAuth()
//     const { pathname } = useLocation()
//     const [role] = useRole()
//     if (loading) return
//     return (
//         <div className="fixed inset-x-0 navbar bg-zinc-600/30 text-blue-500 lg:px-20 py-4 mx-auto   rounded-b-xl border-2 border-b-stone-700 flex justify-between items-center backdrop-blur-xl ">
//             <div className="justify-start ">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu bg-white/90 menu-sm z[1] dropdown-content rounded-box mt-3 w-52 p-2 shadow gap-2 pt-5">
//                         <div className=" flex items-center gap-10">
//                             <Link to={"/my-profile"} role="button" className=" border inline-block rounded-full border-gray-400">
//                                 <img src={user && user.photoURL ? user.photoURL : user2} className='w-10 h-10 rounded-full object-cover' referrerPolicy='no-referrer' alt="" />
//                             </Link>
//                             {user
//                                 ?
//                                 <Button size="lg" onClick={() => logOut()} className="px-6 xl:hidden  dark:text-background font-medium rounded-md shadow-md  transition duration-300 mr-4">Logout</Button>
//                                 :
//                                 <Link to="/login" className="px-6 py-2 text-white bg-orange-400 dark:text-background font-medium rounded-md shadow-md  transition duration-300 mr-4">Login</Link>}
//                         </div>

//                         <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/"}>Home</NavLink></li>
//                         <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/all-articles"}>All Articles</NavLink></li>

//                         {user && <>
//                             <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/add-article"}>Add Articles</NavLink></li>
//                             <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/subscription"}>Subscription</NavLink></li>
//                             <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/my-articles"}>My Articles</NavLink></li>
//                         </>}

//                         {isSubscribe || role === "admin" ? <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/premium-articles"}>Premium Articles</NavLink></li> : <></>}
//                         {role === "admin" && <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/dashboard"}>Dashboard</NavLink></li>}
//                     </ul>
//                 </div>
//                 <Link to={"/"} className="flex items-center justify-center gap-3">
//                     <div className='p-2'>
//                         <img className='w-24' src={logoOfWebsite} alt="logo" />
//                     </div>
//                 </Link>
//             </div>
//             <div className="xl:justify-center xl:items-center flex-1 hidden xl:flex">
//                 <ul className="menu menu-horizontal px-1 uppercase">
//                     <li><NavLink className={"mr-3 bg-background  rounded-full border  border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/"}>Homee</NavLink></li>

//                     {role === "admin" || role === "premium" || role === "standard" ?
//                         <DropdownMenu >
//                             <DropdownMenuTrigger >
//                                 <li><Link className={`mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 uppercase dark:bg-[#DCDCDC] dark:text-background ${pathname === "/all-articles" || pathname === "/premium-articles" ? "active" : ""}`} >All Articles <FaAngleDown></FaAngleDown></Link></li>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent className="z-[9999]">
//                                 <DropdownMenuItem className="hover:bg-none">
//                                     <NavLink className={"mr-3 uppercase bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background px-4 py-2 w-full"} to={"/all-articles"}>All Articles</NavLink>
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem>
//                                     <NavLink className={"mr-3 uppercase bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background px-4 py-2 w-full"} to={"/premium-articles"}>Premium Articles</NavLink>
//                                 </DropdownMenuItem>
//                             </DropdownMenuContent>
//                         </DropdownMenu>
//                         :
//                         <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/all-articles"}>All Articles</NavLink></li>}

//                     {user && <>
//                         <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/add-article"}>Add Articles</NavLink></li>
//                         <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/subscription"}>Subscription</NavLink></li>
//                         <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/my-articles"}>My Articles</NavLink></li>
//                     </>}

//                     {/* this will show only for admin */}
//                     {role === "admin" && <li><NavLink className={"mr-3 bg-background rounded-full border bg-[#DCDCDC] border-gray-400 dark:bg-[#DCDCDC] dark:text-background"} to={"/dashboard"}>Dashboard</NavLink></li>}


//                 </ul>
//             </div>
//             {/* login or signup methods */}
//             {user ?
//                 <>
//                     <Button size="lg" onClick={() => logOut()} className="px-6 hidden xl:inline-block  dark:text-background font-medium rounded-md shadow-md  transition duration-300 mr-4">Logout</Button>
//                     <Link to={"/my-profile"} className="p-1 bg-gray-600 hover:scale-105 active:scale-95 transition duration-150 ease-in-out rounded-full hidden lg:inline-block ">
//                         <img src={user && user.photoURL ? user.photoURL : user2} className='w-8 h-8 rounded-full object-cover' referrerPolicy='no-referrer' alt="" />
//                     </Link>
//                 </>
//                 :
//                 <>
//                     <Link to="/login" >
//                         <Button size="lg" className=" hidden lg:inline-block py-2  bg-orange-500 rounded-full font-semibold  shadow-md  transition duration-300 mr-4">Login</Button>
//                     </Link>
//                     <Link to="/register" >
//                         <Button size="lg" className=" hidden lg:inline-block py-2  bg-green-400 font-semibold rounded-full shadow-md  transition duration-300 mr-4">Register</Button>
//                     </Link>
//                 </>
//             }

//                <ModeToggle/>
//         </div>

//     );
// }

// export default Navbar



import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoOfWebsite from "../../public/logos.png";
import user2 from "@/assets/user.png";
import useAuth from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import useRole from '@/hooks/useRole';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { ModeToggle } from '@/components/mode-toggle';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const { user, loading, logOut, isSubscribe } = useAuth();
    const { pathname } = useLocation();
    const [role] = useRole();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    if (loading) return null;

    return (
        <div className="fixed inset-x-0 bg-zinc-600/30 text-blue-500 lg:px-20 py-4 mx-auto rounded-b-xl border-2 border-b-stone-700 flex justify-between items-center backdrop-blur-xl">
            {/* Hamburger Menu Button */}
            <div className="justify-start">

                {/* Logo */}
                <Link to="/" className="flex items-center justify-center gap-3">
                    <div className="p-2">
                        <img className="w-24" src={logoOfWebsite} alt="Logo" />
                    </div>
                </Link>
                
            </div>

           

            {/* Desktop Menu */}
            <div className="xl:justify-center xl:items-center flex-1 hidden xl:flex">
                <ul className="menu menu-horizontal px-1 uppercase">
                    <li><NavLink className="nav-item" to="/">Home</NavLink></li>

                    {role === "admin" || role === "premium" || role === "standard" ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <li>
                                    <Link className={`nav-item ${pathname === "/all-articles" || pathname === "/premium-articles" ? "active" : ""}`}>
                                        All Articles <FaAngleDown />
                                    </Link>
                                </li>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="z-[9999]">
                                <DropdownMenuItem><NavLink className="nav-item px-4 py-2 w-full" to="/all-articles">All Articles</NavLink></DropdownMenuItem>
                                <DropdownMenuItem><NavLink className="nav-item px-4 py-2 w-full" to="/premium-articles">Premium Articles</NavLink></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <li><NavLink className="nav-item" to="/all-articles">All Articles</NavLink></li>
                    )}

                    {user && (
                        <>
                            <li><NavLink className="nav-item" to="/add-article">Add Articles</NavLink></li>
                            <li><NavLink className="nav-item" to="/subscription">Subscription</NavLink></li>
                            <li><NavLink className="nav-item" to="/my-articles">My Articles</NavLink></li>
                        </>
                    )}

                    {role === "admin" && <li><NavLink className="nav-item" to="/dashboard">Dashboard</NavLink></li>}
                </ul>
            </div>

            {/* User Actions */}
           <div className='flex px-2'>
                {user ? (
                    <>
                        <Button
                            size="lg"
                            onClick={logOut}
                            className="px-6 hidden xl:inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition duration-300 mr-4"
                        >
                            Logout
                        </Button>
                        <Link to="/my-profile" className="p-1 bg-gray-600 hover:scale-105 active:scale-95 transition duration-150 ease-in-out rounded-full hidden lg:inline-block">
                            <img src={user?.photoURL || user2} className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" alt="User" />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <Button
                                size="lg"
                                className="hidden lg:inline-block py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300 mr-4"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button
                                size="lg"
                                className="hidden lg:inline-block py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition duration-300 mr-4"
                            >
                                Register
                            </Button>
                        </Link>
                    </>
                )}
           </div>

      
            {/* Dark Mode Toggle */}
          <div>
                <ModeToggle />
                <button
                    onClick={toggleSidebar}
                    className="btn btn-ghost xl:hidden p-2 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
          </div>


            {/* Sidebar Menu with Motion */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleSidebar}
                            className="fixed inset-0 bg-black/50 z-40"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', ease: 'easeInOut' }}
                            className="fixed top-0  right-[-10px] h-full w-64 bg-background min-h-screen backdrop-blur-lg shadow-lg z-50 p-4"
                        >
                            {/* Close Button */}
                            <button
                                onClick={toggleSidebar}
                                className="absolute top-4 right-4 p-2 focus:outline-none"
                            >
                                <FaTimes className="h-5 w-5 text-gray-700" />
                            </button>

                            {/* Sidebar Content */}
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <Link to="/my-profile" role="button" className="border inline-block rounded-full border-gray-400">
                                        <img src={user?.photoURL || user2} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" alt="User" />
                                    </Link>
                                    {user ? (
                                        <Button
                                            size="lg"
                                            onClick={logOut}
                                            className="px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition duration-300"
                                        >
                                            Logout
                                        </Button>
                                    ) : (
                                        <Link to="/login">
                                            <Button
                                                size="lg"
                                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition duration-300"
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                    )}
                                </div>

                                <ul className="flex flex-col gap-2">
                                    <li><NavLink className="nav-item" to="/">Home</NavLink></li>
                                    <li><NavLink className="nav-item" to="/all-articles">All Articles</NavLink></li>

                                    {user && (
                                        <>
                                            <li><NavLink className="nav-item" to="/add-article">Add Articles</NavLink></li>
                                            <li><NavLink className="nav-item" to="/subscription">Subscription</NavLink></li>
                                            <li><NavLink className="nav-item" to="/my-articles">My Articles</NavLink></li>
                                        </>
                                    )}

                                    {isSubscribe || role === "admin" ? <li><NavLink className="nav-item" to="/premium-articles">Premium Articles</NavLink></li> : null}
                                    {role === "admin" && <li><NavLink className="nav-item" to="/dashboard">Dashboard</NavLink></li>}
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;