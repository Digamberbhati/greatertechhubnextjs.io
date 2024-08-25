'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex items-center  justify-between bg-transparent backdrop-blur-lg sticky top-0 w-full h-13 px-8 py-0 z-100  text-[#F5EBEB] z-20">
            <img  src="/images/logo.png" alt="Logo" className="w-40 h-25" />
            <div className="lg:hidden ">
                <button
                    className="text-white focus:outline-none pr-2 "
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>
            <div className={cn("lg:flex items-center", className, isMenuOpen ? "block" : "hidden")}>
                {isMenuOpen && (
                    <button
                        className="absolute top-1 right-4 text-white focus:outline-none lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg className="w-6 h-6 absolute right-8 top-4 z-[101] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                )}
                <Menu setActive={setActive}>
                
                    <Link href="/" className="hover:border-b hover:border-white duration-200">Home</Link>
                    <Link href="/about" className="hover:border-b hover:border-white duration-200">About</Link>
                    <Link href="/service" className="hover:border-b hover:border-white duration-200">Service</Link>
                    <Link href="/contact" className="hover:border-b hover:border-white duration-200">Contact</Link>
                    <Link href="/careers" className="hover:border-b hover:border-white duration-200">Careers</Link>
                    <MenuItem setActive={setActive} active={active} item="Company">
                        <div className="flex flex-col space-y-4 z-[100] text-sm">
                            <HoveredLink href="/event">Event</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/blog">Blog</HoveredLink>
                            <HoveredLink href="/client">Client</HoveredLink>
                            {/* <HoveredLink href="/careers">Careers</HoveredLink> */}
                            <HoveredLink href="/support">Support</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
            <Link href="" className="hidden lg:flex border border-zinc-600 h-6 justify-center items-center bg-black px-8 py-8 rounded-full hover:bg-transparent">
                Refer&Earn
            </Link>
        </div>
    );
}

export default Navbar;
