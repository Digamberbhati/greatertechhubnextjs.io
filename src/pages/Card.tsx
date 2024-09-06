"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

interface CardProps {
  topic: string;
  description: string;
  image: string;
  key: number;
}

export function Card({ topic, description, image}: CardProps) {
  // Function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  bg-custom-black text-zinc-100 border-white/[0.21] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold">
        {truncateText(topic, 28)}
        </CardItem>

        <CardItem
          as="p"
          className="text-sm max-w-sm text-wrap mt-2 truncate" >
          {truncateText(description, 100)}
        </CardItem>

        <CardItem transla
        teZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl "
            alt={topic}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <Link href="careers/apply">
            <CardItem
              as="button"
              className="px-4 py-2 rounded-xl cursor-pointer bg-white text-black text-xs font-bold hover:bg-transparent"
            >
              Apply
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
