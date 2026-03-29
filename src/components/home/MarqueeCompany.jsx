'use client'
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import versace from '../../../public/assets/companyLogo/versace.png'
import zara from '../../../public/assets/companyLogo/zara.png'
import gucci from '../../../public/assets/companyLogo/gucci.png'
import prada from '../../../public/assets/companyLogo/prada.png'
import ck from '../../../public/assets/companyLogo/ck.png'
const MarqueeCompany = () => {
    return (
        <section className='bg-black py-5 md:py-10.5 px-5 md:px-8'>
            <Marquee speed={50} gradient={false}>
                <div className="mr-10 flex items-center">
                    <Image
                        src={versace}
                        alt="versace"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                    />
                </div>
                <div className="mr-10 flex items-center">
                    <Image
                        src={zara}
                        alt="zara"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                    />
                </div>
                <div className="mr-10 flex items-center">
                    <Image
                        src={gucci}
                        alt="gucci"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                    />
                </div>
                <div className="mr-10 flex items-center">
                    <Image
                        src={prada}
                        alt="prada"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                    />
                </div>
                <div className="mr-10 flex items-center">
                    <Image
                        src={ck}
                        alt="ck"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                    />
                </div>
                <div className="mr-10 flex items-center">
                    <Image
                        src={versace}
                        alt="versace"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                    />
                </div>
                <div className="mr-10 flex items-center">
                    <Image
                        src={zara}
                        alt="zara"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                    />
                </div>

            </Marquee>
        </section>
    );
};

export default MarqueeCompany;