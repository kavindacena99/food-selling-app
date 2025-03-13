import React, { useState } from "react";

function Navbar(){

    return(
        <nav className="bg-green-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white font-bold text-3xl"><a href="/">Green Mart</a></h1>
                <ul className="flex space-x-4 text-white">
                    <li><a href="" className="hover:text-green-200">Products</a></li>
                    <li><a href="" className="hover:text-green-200">Contact</a></li>
                    <li><a href="" className="hover:text-green-200">About</a></li>
                    <li><a href="/login" className="hover:text-green-200">Login</a></li>
                    <li><a href="/register" className="hover:text-green-200">Signup</a></li>
                </ul>
            </div>
        </nav>
    );
}

/*
<a href="/login" className="hover:text-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5.828 7a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828z" />
                    </svg>
                    <span className="ml-1 align-middle">Login</span>
                    </a>

*/
export default Navbar;