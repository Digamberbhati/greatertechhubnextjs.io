"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-doc";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter,  FaLinkedin  } from "react-icons/fa6";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <FaSquareInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Facebook",
      icon: (
        <FaFacebook
        className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
      href: "#",
    },

   {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
