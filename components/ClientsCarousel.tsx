'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        title: "Innovative Banking at My Fingertips",
        text: "I’ve always been into tech, and BrightPath’s mobile app is one of the best banking apps I’ve ever used. Everything is at my fingertips – from monitoring my spending habits to instantly transferring money between accounts. Their commitment to innovation and security gives me peace of mind knowing my finances are in good hands.",
        workTitle: "Tech Professional",
        name: "Brian Doe",
        photo: "/icons/boy.png"
    },
    {
        title: "Starting Strong with Expert Financial Support",
        text: "Starting a new business can be a daunting task, but BrightPath made it so much easier. From setting up my business account to securing a small business loan, their team guided me through the entire process. They offer competitive rates and the best customer support I’ve ever received. I feel confident that I made the right choice by choosing BrightPath.",
        name: "James Robert",
        workTitle: "Entrepreneur",
        photo: "/icons/bussiness-man.png"
    },
    {
        title: "Empowering My Small Business",
        text: "As a small business owner, managing cash flow can be incredibly stressful. But BrightPath Bank’s business account management system has been a game-changer for me. Their intuitive platform makes it so easy to track expenses, manage invoices, and even apply for business loans. I can focus on growing my business knowing that BrightPath has my back!",
        name: "Sara Johnson",
        workTitle: "Small Business Owner",
        photo: "/icons/girl.png"
    }
];

const ClientsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous slide
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Function to go to the next slide
    const goToNext = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Automatically go to the next slide every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(goToNext, 3000); // Change slide every 3 seconds
        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [currentIndex]);

    return (
        <div className="relative w-full md:w-3/4 p-10 bg-white mx-auto">
            {/* Left Arrow Button */}
            <button 
                onClick={goToPrevious} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-[#E66B2D] hover:text-orange-800"
            >
                ❮
            </button>

            {/* Carousel */}
            <div className="overflow-hidden relative">
                <section className="relative flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 h-3/6 w-full">
                            <h1 className='text-[#E66B2D] mx-auto font-bold text-center text-3xl sm:text-3xl h-6'>{testimonial.title}</h1>
                            <figure className="mt-10">
                                <blockquote className="px-10 text-center text-lg font-normal text-[#000000] sm:text-lg">
                                    <p>
                                        {testimonial.text}
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6">
                                    <img
                                        alt=""
                                        src={testimonial.photo}
                                        className="mx-auto h-10 w-10 rounded-full"
                                    />
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                            <circle r={1} cx={1} cy={1} />
                                        </svg>
                                        <div className="text-gray-600">{testimonial.workTitle}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </section>
            </div>

            {/* Right Arrow Button */}
            <button 
                onClick={goToNext} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-[#E66B2D] hover:text-orange-800"
            >
                ❯
            </button>
        </div>
    );
};

export default ClientsCarousel;
