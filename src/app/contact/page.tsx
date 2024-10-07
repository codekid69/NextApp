'use client'
import { Meteors } from "../../components/ui/meteors";
import React, { useState } from 'react';

function Page() {
    // State variables for input fields
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Show alert message
        alert('Thank you for reaching out to us!');

        // Clear the input fields
        setEmail('');
        setMessage('');
    };

    return (
        <div className="min-h-screen bg-black py-12 pt-40">
            <div className="relative w-[80vw] max-w-full m-auto">
                {/* Gradient background with sufficient height for visibility */}
                <div className="absolute top-0 left-0 h-[55vh] md:h-[80vh] w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] md:scale-[0.80] rounded-full blur-3xl z-0 opacity-50 md:opacity-80" />

                {/* Main content div with higher z-index */}
                <div className="w-full h-[55vh] md:h-[70vh] relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 md:px-12 md:py-10 overflow-hidden rounded-2xl flex flex-col justify-around items-center z-10">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-sans font-bold text-white">
                        Contact Us
                    </h1>
                    <form className="flex flex-col justify-around space-y-10 w-full px-4 sm:px-8 lg:px-12" onSubmit={onSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email} // Bind input value to state
                                onChange={(e) => setEmail(e.target.value)} // Update email state on change
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Message..."
                                value={message} // Bind input value to state
                                onChange={(e) => setMessage(e.target.value)} // Update message state on change
                                className="w-full px-4 py-10 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="mt-20 text-center">
                            <button
                                type="submit" // Use type="submit" for form submission
                                className="border px-6 py-2 rounded-lg border-gray-500 text-gray-300 hover:bg-gray-700 hover:border-gray-400 transition-all duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}

export default Page;
