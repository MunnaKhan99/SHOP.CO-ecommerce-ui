import { X } from 'lucide-react';
import React from 'react';

const Promobar = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto  px-5 py-2 md:px-15'>
            <div></div>
            <div>
                <p className='text-xs md:text-md text-neutral-400'>Sign up and get 20% off to your first order. <span className='underline text-neutral-200'>Sign Up Now</span></p>
            </div>
            <div>
                <X className='hidden md:flex' />
            </div>
        </div>
    );
};

export default Promobar;