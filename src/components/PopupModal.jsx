// import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import { useEffect, useState } from 'react'
// import newImage from "@/assets/file.png" // Replace with the updated image
// import { Link } from 'react-router-dom'
// import useRole from '@/hooks/useRole'

// function PopupModal() {
//     const [isOpen, setIsOpen] = useState(false)
//     const [role] = useRole()

//     function close() {
//         setIsOpen(false)
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             if (role === "user") {
//                 setIsOpen(true)
//             }
//         }, 10000)
//     }, [role])

//     return (
//         <>
//             <Dialog open={isOpen} as="div" className="relative z-[999999] focus:outline-none" onClose={close}>
//                 <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 w-screen overflow-y-auto" aria-hidden="true">
//                     <div className="flex min-h-full items-center justify-center p-6">
//                         <DialogPanel className="w-full max-w-lg bg-white rounded-2xl shadow-2xl">
//                             <div className="p-6 text-center">
//                                 <DialogTitle as="h3" className="text-2xl font-bold text-gray-800 mb-4">
//                                     Exclusive Offer Just for You!
//                                 </DialogTitle>
//                                 <p className="text-gray-600 mb-6 leading-relaxed">
//                                     Discover the power of premium! Upgrade now to access advanced tools, priority support, and so much more. Your journey to the next level begins here!
//                                 </p>
//                                 <p className="text-sm text-gray-500 mb-6">
//                                     Don’t miss out on this limited-time opportunity to enhance your experience. 💎
//                                 </p>
//                                 <div className="flex items-center justify-center mb-6">
//                                     <img
//                                         src={newImage}
//                                         alt="Exclusive Offer"
//                                         className="rounded-lg w-4/5"
//                                     />
//                                 </div>
//                                 <div className="flex flex-col items-center">
//                                     <Link to="/subscription" className="w-3/4 mb-3">
//                                         <button
//                                             onClick={close}
//                                             className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105 shadow-lg"
//                                         >
//                                             Upgrade Now
//                                         </button>
//                                     </Link>
//                                     <Button
//                                         onClick={close}
//                                         className="w-3/4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-full transition-transform transform hover:scale-105"
//                                     >
//                                         Maybe Later
//                                     </Button>
//                                 </div>
//                             </div>
//                         </DialogPanel>
//                     </div>
//                 </div>
//             </Dialog>
//         </>
//     )
// }

// export default PopupModal;

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '@/assets/pop-up-animation.json'; // Lottie animation file
import useRole from '@/hooks/useRole';

function PopupModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [role] = useRole();
    const navigate = useNavigate();

    function close() {
        setIsOpen(false);
    }

    useEffect(() => {
        setTimeout(() => {
            if (role === "user") {
                setIsOpen(true);
            }
        }, 3000); // Show modal after 3 seconds
    }, [role]);

    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-[999999] focus:outline-none" onClose={close}>
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 w-screen overflow-y-auto"
                    aria-hidden="true"
                >
                    <div className="flex min-h-full items-center justify-center p-6">
                        <DialogPanel className="w-full max-w-lg bg-white rounded-2xl shadow-2xl relative">
                            {/* Back Button in the top-left corner */}
                            <button
                                onClick={() => {
                                    close();
                                    navigate(-1); // Navigate back to the previous page
                                }}
                                className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition-transform transform hover:scale-105 shadow-md"
                            >
                                Back
                            </button>

                            <div className="p-6 text-center">
                                <DialogTitle as="h3" className="text-2xl font-bold text-gray-800 mb-4">
                                    Unlock Premium Features!
                                </DialogTitle>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Take your experience to the next level! Upgrade to premium and enjoy advanced tools,
                                    exclusive content, and priority support.
                                </p>
                                <p className="text-sm text-gray-500 mb-6">
                                    Don’t miss out on this amazing opportunity to unlock your full potential. 🚀
                                </p>
                                <div className="flex items-center justify-center mb-6">
                                    <Lottie
                                        loop={true}
                                        animationData={animationData}
                                        className="w-2/3 max-w-[250px]"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <Link to="/subscription" className="w-3/4">
                                        <button
                                            onClick={close}
                                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105 shadow-lg"
                                        >
                                            Upgrade Now
                                        </button>
                                    </Link>
                                    <Button
                                        onClick={close}
                                        className="w-3/4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-full transition-transform transform hover:scale-105"
                                    >
                                        Maybe Later
                                    </Button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default PopupModal;
