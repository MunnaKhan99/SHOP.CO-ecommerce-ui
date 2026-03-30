import Image from 'next/image';
import React from 'react';
import casualImage from "../../../public/assets/dressStyleLogo/casual.png"
import formalImage from "../../../public/assets/dressStyleLogo/formal.png"
import partyImage from "../../../public/assets/dressStyleLogo/party.png"
import gymImage from "../../../public/assets/dressStyleLogo/gym.png"

const BrowseDress = () => {
    return (
        <section className='mx-5 md:mx-0'>
            <div className='bg-[#F0F0F0] max-w-7xl mx-auto  mt-12 rounded-3xl md:rounded-4xl'>
                <div className='flex justify-center pt-10 md:pt-17.5'>
                    <h1 className='uppercase font-integral font-bold text-4xl  text-center md:text-5xl'>Browse By <br className='block md:hidden' /> Dress Style</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 p-6 md:p-16 gap-5'>
                    <div
                        className="group relative   h-[200px] md:h-[250px] rounded-xl overflow-hidden"
                    >
                        <Image
                            src={casualImage}
                            alt='casual-image'
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 "></div>

                        <h2 className="absolute top-4 left-4 text-black text-2xl md:text-4xl font-bold">
                            Casual
                        </h2>
                    </div>
                    <div
                        className="group relative md:col-span-2 h-[200px] md:h-[250px] rounded-xl overflow-hidden"
                    >
                        <Image
                            src={formalImage}
                            alt='formal-image'
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 "></div>

                        <h2 className="absolute top-4 left-4 text-black text-2xl md:text-4xl font-bold">
                            Formal
                        </h2>
                    </div>
                    <div
                        className="group relative  md:col-span-2 h-[200px] md:h-[250px] rounded-xl overflow-hidden"
                    >
                        <Image
                            src={partyImage}
                            alt='party-image'
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 "></div>

                        <h2 className="absolute top-4 left-4 text-black text-2xl md:text-4xl font-bold">
                            Party
                        </h2>
                    </div>
                    <div
                        className="group relative  h-[200px] md:h-[250px] rounded-xl overflow-hidden"
                    >
                        <Image
                            src={gymImage}
                            alt='gym-image'
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 "></div>

                        <h2 className="absolute top-4 left-4 text-black text-2xl md:text-4xl font-bold">
                            Gym
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseDress;