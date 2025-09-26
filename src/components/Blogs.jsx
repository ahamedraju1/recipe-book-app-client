import React from 'react';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const blogs = [
    {
        title: "Mastering Italian Pasta",
        img: "https://i.ibb.co.com/jP3Vy4vm/Chat-GPT-Image-Sep-26-2025-09-03-20-AM.png",
        excerpt:
            "Learn the art of perfect pasta – from kneading dough to balancing flavors like a true Italian chef.",
    },
    {
        title: "Sizzling Asian Stir Fry",
        img: "https://i.ibb.co.com/PsMbmXn1/download-4.jpg",
        excerpt:
            "Quick, healthy, and bold flavors! Tips for creating restaurant-style stir fry at home.",
    },
];

const Blogs = () => {


    return (
        <div className="my-26 px-4 lg:px-24">
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 text-gray-800">
                Recent Blogs & Chef Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog, index) => (
                    <Fade
                        key={index}
                        direction={index % 2 === 0 ? "left" : "right"}
                        cascade
                        triggerOnce
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
                                <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-all duration-300 transform hover:scale-105">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};


export default Blogs;