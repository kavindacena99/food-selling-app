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
                    <li><a href="/login" className="hover:text-green-200">Seller</a></li>
                    <li><a href="/register" className="hover:text-green-200">Buyer</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;