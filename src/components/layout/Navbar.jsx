"use client"
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../reuseableUI/Logo';
import Link from 'next/link';
import { ChevronDown, Menu, Search, ShoppingCart, UserRound, X } from 'lucide-react';

const Navbar = () => {
    const [menu, setMenu] = useState([])
    const [openMenu, setOpenMenu] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [openCategory, setOpenCategory] = useState(null)
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
    const [openMobileCategory, setOpenMobileCategory] = useState(null)
    const dropdownRef = useRef(null);
    useEffect(() => {

        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpenDropdown(null);
                setOpenCategory(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);
    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => setMenu(data.menu))
    }, [])
    const navLinks = [
        {
            name: "Shop",
            path: "/shop",
            hasDropdown: true
        },
        {
            name: "On Sale",
            path: "/on-sale",
            hasDropdown: false
        },
        {
            name: "New Arrivals",
            path: "/new-arrivals",
            hasDropdown: false
        },
        {
            name: "Brands",
            path: "/brands",
            hasDropdown: false
        }
    ];
    return (
        <nav className="max-w-7xl mx-auto px-5  py-4 md:px-8">

            {/* NAVBAR ROW */}
            <div className="flex items-center gap-4">

                {/* LEFT (mobile menu + logo) */}
                <div className="flex items-center gap-4 lg:basis-[50%]">

                    <button
                        className="text-black lg:hidden"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        {openMenu ? <X /> : <Menu />}
                    </button>

                    <Logo />

                    {/* Desktop links */}
                    <ul className="hidden lg:flex flex-1 justify-around">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative">

                                <button
                                    className="text-black flex items-end gap-1"
                                    onClick={() =>
                                        link.hasDropdown
                                            ? setOpenDropdown(openDropdown === link.name ? null : link.name)
                                            : null
                                    }
                                >
                                    {link.name}

                                    {link.hasDropdown && <ChevronDown size={20} />}
                                </button>

                                {openDropdown === "Shop" && link.name === "Shop" && (
                                    <div
                                        ref={dropdownRef}
                                        className="absolute top-full left-0 bg-white shadow-lg p-6 z-50 w-[260px]">

                                        <ul className="space-y-4">

                                            {menu.map((cat) => (
                                                <li key={cat.name}>

                                                    {/* CATEGORY BUTTON */}
                                                    <button
                                                        className="flex w-full justify-between items-center font-semibold text-black"
                                                        onClick={() =>
                                                            setOpenCategory(
                                                                openCategory === cat.name ? null : cat.name
                                                            )
                                                        }
                                                    >
                                                        {cat.name}
                                                        <ChevronDown
                                                            size={18}
                                                            className={`transition-transform ${openCategory === cat.name ? "rotate-180 text-black" : " text-black"
                                                                }`}
                                                        />
                                                    </button>

                                                    {/* CATEGORY ITEMS */}
                                                    {openCategory === cat.name && (
                                                        <ul className="mt-2 pl-4 space-y-2">

                                                            {cat.items.map((item) => (
                                                                <li key={item.slug}>
                                                                    <Link
                                                                        href={`/category/${item.slug}`}
                                                                        className="text-black "
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))}

                                                        </ul>
                                                    )}

                                                </li>
                                            ))}

                                        </ul>

                                    </div>
                                )}

                            </li>
                        ))}
                    </ul>

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4 ml-auto lg:basis-[50%]">

                    {/* Desktop search */}
                    <div className="relative flex-1 hidden lg:flex">

                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={24}
                        />

                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full pl-10 pr-4 py-2 rounded-full text-gray-400 bg-[#F0F0F0] outline-none"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4 text-black">
                        <Search className="lg:hidden" />
                        <ShoppingCart />
                        <UserRound />
                    </div>

                </div>

            </div>


            {/* MOBILE MENU */}
            {/* MOBILE MENU */}
            {openMenu && (
                <div

                    className="lg:hidden border-t mt-4 pt-4">

                    <ul className="flex flex-col gap-4" >

                        {navLinks.map((link) => (
                            <li key={link.name}>

                                {/* SHOP WITH DROPDOWN */}
                                {link.hasDropdown ? (
                                    <button
                                        className="flex w-full justify-between items-center text-black"
                                        onClick={() =>
                                            setOpenMobileDropdown(
                                                openMobileDropdown === link.name ? null : link.name
                                            )
                                        }
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform ${openMobileDropdown === link.name ? "rotate-180 " : ""
                                                }`}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.path}
                                        className="text-black"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* SHOP DROPDOWN */}
                                {openMobileDropdown === "Shop" && link.name === "Shop" && (

                                    <ul className="pl-4 mt-2 space-y-3">

                                        {menu.map((cat) => (
                                            <li key={cat.name}>

                                                {/* CATEGORY BUTTON */}
                                                <button
                                                    className="flex w-full justify-between items-center text-black font-semibold"
                                                    onClick={() =>
                                                        setOpenMobileCategory(
                                                            openMobileCategory === cat.name ? null : cat.name
                                                        )
                                                    }
                                                >
                                                    {cat.name}
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition-transform ${openMobileCategory === cat.name ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </button>

                                                {/* CATEGORY ITEMS */}
                                                {openMobileCategory === cat.name && (
                                                    <ul className="pl-4 mt-2 space-y-2">

                                                        {cat.items.map((item) => (
                                                            <li key={item.slug}>
                                                                <Link
                                                                    href={`/category/${item.slug}`}
                                                                    className="text-gray-600"
                                                                    onClick={() => setOpenMenu(false)}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                )}

                                            </li>
                                        ))}

                                    </ul>

                                )}

                            </li>
                        ))}

                    </ul>

                </div>
            )}

        </nav>
    );
};

export default Navbar;