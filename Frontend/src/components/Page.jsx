import React, { useState } from 'react';

function Page() {
    const [bgColor, setBgColor] = useState('bg-white'); 

    const changeBackgroundColor = () => {
        const colors = ['bg-white', 'bg-blue-100', 'bg-yellow-100', 'bg-green-100', 'bg-pink-100'];
        const nextIndex = (colors.indexOf(bgColor) + 1) % colors.length;
        setBgColor(colors[nextIndex]);
    };
    

    return (
        <div className={`${bgColor} transition-colors duration-500`}>
            <div id="home" className="h-screen flex items-center justify-center">
                <h1 className="text-5xl font-bold text-center">Vaibhav Arora<br/>Welcome to My Portfolio</h1>
            </div>

            <div id="bio" className="h-screen flex items-center justify-center">
                <div className="text-center max-w-2xl">
                    <h2 className="text-4xl font-semibold mb-4">About Me</h2>
                    <p className="text-xl">I’m Vaibhav Arora, a dedicated Full Stack Developer proficient in the MERN stack (MongoDB, Express, React, Node.js) and currently diving into Machine Learning. I specialize in building high-performance, scalable web applications. With a passion for continuous learning, I’m always experimenting with new technologies to deliver impactful and efficient solutions.</p>
                </div>
            </div>

<div id="skills" className={`h-screen flex items-center justify-center ${bgColor}`}>
    <div className="text-center">
        <h2 className="text-4xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-7 font-medium w-[500px]">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 w-28">
                Python
            </button>
            <button className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 w-28">
                React
            </button>
            <button className="bg-yellow-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 w-28">
                MongoDB
            </button>
            <button className="bg-red-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-red-600 w-28">
                Node.js
            </button>
            <button className="bg-indigo-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-600 w-28">
                Express
            </button>
            <button className="bg-purple-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-purple-600 w-28">
                JavaScript
            </button>
            <button className="bg-teal-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-teal-600 w-28">
                Tailwind CSS
            </button>
            <button className="bg-gray-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-600 w-28">
                Git & GitHub
            </button>
            <button className="bg-orange-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-orange-600 w-28">
                REST API
            </button>
            <button className="bg-pink-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-pink-600 w-28">
                HTML
            </button>
            <button className="bg-blue-400 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-500 w-28">
                CSS
            </button>
            <button className="bg-yellow-400 text-white py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 w-28">
                Java
            </button>
            <button className="bg-red-400 text-white py-3 px-6 rounded-full shadow-md hover:bg-red-500 w-28">
                C++
            </button>
            <button className="bg-indigo-400 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-500 w-28">
                Redux
            </button>
        </div>
    </div>
</div>




<div id="projects" className="h-screen flex items-center justify-center py-10">
    <div className="text-center">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>
        <div className="flex flex-col items-center">
            <div className="bg-orange-50 shadow-xl rounded-xl p-6 w-full max-w-md">
                <h3 className="text-2xl font-semibold mb-4">Blog Site</h3>
                <p className="text-gray-700 mb-4">
                    A dynamic blog site where users can manage posts in real-time. Built with React, Redux, and Tailwind CSS for a responsive UI.<br />
                    Integrated Appwrite for backend services like authentication and database management.<br />
                    <strong>Tools Used:</strong> React, Redux, Appwrite, Tailwind CSS
                </p>
                <a href="https://github.com/vaibhav092/Blog-nest" target="_blank" rel="noopener noreferrer"         className="text-blue-500 hover:text-blue-700 ">
                    View on GitHub
                </a>
            </div>
        </div>
    </div>
</div>




            <div id="contact" className="h-screen flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-4xl font-semibold mb-6 text-center">Contact Me</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input type="text" className="w-full border p-2 rounded" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input type="email" className="w-full border p-2 rounded" placeholder="Your email" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea className="w-full border p-2 rounded" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <div className="fixed top-13 right-1">
                <button
                    onClick={changeBackgroundColor}
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                    Change Background
                </button>
            </div>
        </div>
    );
}

export default Page;
