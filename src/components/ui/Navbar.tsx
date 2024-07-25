'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

  return (

    <div className="flex items-center justify-between backdrop-blur-lg  fixed  top-15 w-full px-8 py-4 ">
      <img className="h-24" src="https://greatertechhub.com/assets/img/logo/logo.png" alt="" />
      <div
      className={cn(" ", className)}
    >
      <Menu setActive={setActive} >
        <Link href={"/"} >Home</Link>
        <Link href={"/about"} >About</Link>
        <Link href={"/service"} >Service</Link>
        <Link href={"/contact"} >Contact</Link>
        <Link href={"/company"} >Company</Link>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/event">Event</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/client">Client</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
            <HoveredLink href="/support">Support</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
      <Link href={"#"} className="border border-zinc-600 h-6 flex justify-center items-center  bg-black p-4 py-6 rounded-full ">Join us</Link>
    </div>
  )
}

export default Navbar
