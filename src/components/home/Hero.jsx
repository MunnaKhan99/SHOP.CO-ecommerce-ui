import React from 'react';
import heroImg from '../../../public/assets/hero-image.png'
import geminiLogo from '../../../public/assets/gemini-logo.png'
import Image from 'next/image';
const Hero = () => {
    return (
        <section className="bg-[#F2F0F1]">
            <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 flex flex-col md:flex-row items-end ">

                {/* LEFT */}
                <div className="flex-1 space-y-8">
                    <h1 className="font-integral uppercase font-extrabold text-4xl md:text-6xl leading-tight">
                        Find Clothes <br /> That Matches <br /> Your Style
                    </h1>

                    <p className="text-gray-600 max-w-md">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button className="bg-black text-white px-8 py-3 rounded-full font-medium">
                        Shop Now
                    </button>

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-3 text-center py-4">

                        {/* ITEM 1 */}
                        <div className="px-4 border-r border-gray-300">
                            <h3 className="font-bold text-2xl md:text-3xl">200+</h3>
                            <p className="text-sm text-gray-500">International Brands</p>
                        </div>

                        {/* ITEM 2 */}
                        <div className="px-4 md:border-r border-gray-300">
                            <h3 className="font-bold text-2xl md:text-3xl">2,000+</h3>
                            <p className="text-sm text-gray-500">High-Quality Products</p>
                        </div>

                        {/* ITEM 3 */}
                        <div className="col-span-2 md:col-span-1 px-4 pt-4 md:pt-0">
                            <h3 className="font-bold text-2xl md:text-3xl">30,000+</h3>
                            <p className="text-sm text-gray-500">Happy Customers</p>
                        </div>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1 relative flex justify-end items-end">
                    <Image
                        src={heroImg}
                        alt="hero"
                        className="w-[500px] md:w-[500px] object-contain"
                        priority
                    />

                    {/* Decorative stars */}
                    <Image
                        src={geminiLogo}
                        alt="star"
                        className="absolute top-10 right-10 w-15 md:w-20"
                    />

                    <Image
                        src={geminiLogo}
                        alt="star"
                        className="absolute bottom-56 left-5 w-10 md:w-15"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;