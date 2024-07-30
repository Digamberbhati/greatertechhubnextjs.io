"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

interface CardProps {
  topic: string;
  description: string;
  image: string;
  author: string;
  date: string;
  blogLink: string;
  key: number;
}

export function Card({ topic, description, image, author, date, blogLink, key }: CardProps) {
  // Function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black text-zinc-100 border-white/[0.21] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold">
        {truncateText(topic, 28)}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm text-wrap mt-2 truncate"
        >
          {truncateText(description, 100)}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={topic}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={`https://twitter.com/${author.replace(/\s+/g, '').toLowerCase()}`} // Link based on author
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-zinc-100"
          >
            {author} / {date}
          </CardItem>
          <Link href={`${blogLink}`}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl cursor-pointer bg-white text-black text-xs font-bold"
            >
              Read...
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
