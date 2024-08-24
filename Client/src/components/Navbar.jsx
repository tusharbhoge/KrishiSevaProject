import React, { useEffect, useState } from 'react';
import logo from "../assets/AgriRental.png";
import Button from './Button';
import gsap from 'gsap';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [bgOpacity, setBgOpacity] = useState("bg-opacity-100");

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrollY(currentScroll);

            if (currentScroll > 20) {
                setBgOpacity('bg-opacity-70');
            } else {
                setBgOpacity('bg-opacity-100');
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    // CSS for buttons
    const border = "px-4 py-2 border border-green-600 text-green-700 bg-white rounded-[15px] hover:bg-green-700 hover:text-white";
    const hoverEffect = "hover:font-bold";

    return (
        <nav className={`w-full p-5 pr-[100px] pl-[100px] flex justify-between fixed z-40 top-0 left-0 bg-white transition-all duration-300 ${bgOpacity}`}>
            <img src={logo} alt="logo" className='w-40' />
            <div className='w-2/5 flex justify-around items-center font-semibold text-xl text-green-700'>
                <Button title="Home" to="/" style={hoverEffect} />
                <Button title="Dashboard" to="/dashboard" style={hoverEffect} />
                <Button title="Add Product" to="/add-product" style={hoverEffect} />
                <Button title="Help" to="/help" style={hoverEffect} />
            </div>
            <div className='w-1/6 flex justify-around items-center font-semibold text-xl'>
                <Button title="Login" to="/login" style={border} />
                {/* <Button title="Signup" to="/signup" style={border} /> */}
            </div>
        </nav>
    );
}

export default Navbar;

