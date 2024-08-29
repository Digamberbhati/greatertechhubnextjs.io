"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-doc";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter,  FaLinkedin  } from "react-icons/fa6";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <FaSquareInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/greatertechhub/",
    },

    {
      title: "Facebook",
      icon: (
        <FaFacebook
        className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=61557357627522",
    },
    {
      title: "Twitter",
      icon: (
        <FaSquareXTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  
    {
      title: "Linkedin",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/greatertechhub/",
    },

  
  ];
  return (
    <div className="flex items-start justify-start h-[35rem] w-full">
      <FloatingDock
       // mobileClassName="translate-y-10" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
