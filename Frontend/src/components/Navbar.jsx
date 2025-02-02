import React from 'react';

function Navbar() {
return (
    <div className="bg-blue-400 w-full h-12 fixed top-0 z-10 flex justify-around text-black shadow-md">
        <ul className="flex space-x-6 mt-2 justify-evenly">
        <li>
            <a href="#home" className="cursor-pointer hover:text-white">Home</a>
        </li>
        <li>
            <a href="#bio" className="cursor-pointer hover:text-white">About Me</a>
        </li>
        <li>
            <a href="#skills" className="cursor-pointer hover:text-white">Skills</a>
        </li>
        <li>
            <a href="#projects" className="cursor-pointer hover:text-white">Projects</a>
        </li>
        <li>
            <a href="#contact" className="cursor-pointer hover:text-white">Contact</a>
        </li>
        </ul>
    </div>
    );
}

export default Navbar;
