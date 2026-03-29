'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import RatingStars from '../reuseableUI/RatingStarts';
import axios from 'axios';

const TopSelling = () => {
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:5000/products/top-selling");
            setTopSellingProducts(res.data);
        };
        fetchData();
    }, []);
    console.log(topSellingProducts);
    return (
        <section>
            <div className='text-center pt-12 pb-8 md:pt-18 md:pb-14 '>
                <h1 className='uppercase font-integral font-bold text-3xl md:text-5xl'>Top Selling</h1>
            </div>
            <div>
                <Marquee pauseOnHover speed={50} gradient={false}>
                    {topSellingProducts.map((data) => (
                        <div
                            key={data._id}
                            className="mr-6 w-48 md:w-64 bg-white  shadow-md p-3"
                        >
                            {/* Image */}
                            <div className="relative w-full h-40 md:h-52">
                                <Image
                                    src={data.images[0]}
                                    alt={data.name}
                                    fill
                                    sizes="(max-width: 768px) 300px, 300px"
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="mt-3 font-bold text-xl md:text-base">
                                {data.name}
                            </h2>

                            {/* Rating */}
                            <RatingStars rating={data.rating} />

                            {/* Price section */}
                            <div className="flex items-center gap-2 mt-1">
                                {/* Discounted Price */}
                                <span className="font-bold text-2xl">
                                    ${data.discountPrice}
                                </span>

                                {/* Original Price */}
                                <span className="line-through font-bold text-neutral-500 text-2xl">
                                    ${data.price}
                                </span>

                                {/* Discount % */}
                                <span className="text-red-500 px-3 py-1.5 bg-[#FF3333]/10 rounded-full text-sm">
                                    -{data.discount}%
                                </span>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </section>
    );
};

export default TopSelling;