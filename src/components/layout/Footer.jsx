import { Mail } from 'lucide-react';
import React from 'react';
import Logo from '../reuseableUI/Logo';
import { X, Facebook, Instagram, Github } from "lucide-react";
import Image from 'next/image';
import applePay from '../../../public/payments/applePay.png'
import googlePay from '../../../public/payments/gpay.png'
import mastercard from '../../../public/payments/mastarcard.png'
import paypal from '../../../public/payments/paypal.png'
import visa from '../../../public/payments/visa.png'

const Footer = () => {
    return (
        <footer className="relative bg-[#F0F0F0] pt-40">

            {/* floating content */}
            <div className="absolute -top-16 inset-x-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                    <div className="flex flex-col gap-8 rounded-xl bg-black px-6 md:px-16 py-9 text-white shadow-lg lg:flex-row lg:items-center lg:justify-between">

                        {/* Left Content */}
                        <div className="max-w-lg">
                            <h3 className="font-integral text-4xl font-bold uppercase leading-tight">
                                Stay upto date about our latest offers
                            </h3>
                        </div>

                        {/* Right Content */}
                        <div className="flex w-full max-w-[320px] flex-col gap-4">

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full rounded-xl bg-white py-2 pl-10 pr-4 text-gray-600 outline-none"
                                />
                            </div>

                            <button className="w-full rounded-xl bg-white p-2 text-black font-medium">
                                Subscribe to Newsletter
                            </button>

                        </div>

                    </div>

                </div>
            </div>

            {/* footer main content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 md:pt-24 lg:pt-0">

                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between ">

                    {/* LEFT COLUMN */}
                    <div className="max-w-xs space-y-6">
                        <Logo />

                        <p className="text-black/60">
                            We have clothes that suits your style and which you’re proud to wear.
                            From women to men.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 cursor-pointer transition hover:bg-black hover:text-white">
                                <X size={18} />
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 cursor-pointer transition hover:bg-black hover:text-white">
                                <Facebook size={18} />
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 cursor-pointer transition hover:bg-black hover:text-white">
                                <Instagram size={18} />
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 cursor-pointer transition hover:bg-black hover:text-white">
                                <Github size={18} />
                            </div>
                        </div>
                    </div>


                    {/* RIGHT GRID */}
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">

                        <div className="space-y-4">
                            <h4 className="font-semibold text-black">Company</h4>

                            <ul className="space-y-3 text-black/60">
                                <li><a className="hover:text-black transition" href="#">About</a></li>
                                <li><a className="hover:text-black transition" href="#">Features</a></li>
                                <li><a className="hover:text-black transition" href="#">Works</a></li>
                                <li><a className="hover:text-black transition" href="#">Career</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-black">Help</h4>

                            <ul className="space-y-3 text-black/60">
                                <li><a className="hover:text-black transition" href="#">Customer Support</a></li>
                                <li><a className="hover:text-black transition" href="#">Delivery Details</a></li>
                                <li><a className="hover:text-black transition" href="#">Terms & Conditions</a></li>
                                <li><a className="hover:text-black transition" href="#">Privacy Policy</a></li>
                                <li><a className="hover:text-black transition" href="#">FAQ</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-black">Account</h4>

                            <ul className="space-y-3 text-black/60">
                                <li><a className="hover:text-black transition" href="#">Account</a></li>
                                <li><a className="hover:text-black transition" href="#">Manage Delivery</a></li>
                                <li><a className="hover:text-black transition" href="#">Orders</a></li>
                                <li><a className="hover:text-black transition" href="#">Payment</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-black">Resources</h4>

                            <ul className="space-y-3 text-black/60">
                                <li><a className="hover:text-black transition" href="#">Free eBook</a></li>
                                <li><a className="hover:text-black transition" href="#">Development Tutorial</a></li>
                                <li><a className="hover:text-black transition" href="#">How to - Blog</a></li>
                                <li><a className="hover:text-black transition" href="#">Youtube Playlist</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                <div className="flex flex-col gap-4 border-t border-gray-300 pt-6 md:flex-row md:items-center md:justify-between">

                    <p className="text-sm text-black/60">
                        Shop.co © 2000-2023, All Rights Reserved
                    </p>

                    <div className="flex items-center gap-4">

                        <Image
                            src={visa}
                            alt="Visa"
                            className="h-8 w-auto"
                        />

                        <Image
                            src={mastercard}
                            alt="Mastercard"
                            className="h-8 w-auto"
                        />

                        <Image
                            src={paypal}
                            alt="PayPal"
                            className="h-8 w-auto"
                        />

                        <Image
                            src={applePay}
                            alt="Apple Pay"
                            className="h-8 w-auto"
                        />

                        <Image
                            src={googlePay}
                            alt="Google Pay"
                            className="h-8 w-auto"
                        />

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;