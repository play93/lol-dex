import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ListItemProps = {
  title: string;
  imgURL: StaticImageData | string;
  href: string;
};

const MainCard = ({ title, imgURL, href }: ListItemProps) => {
  return (
    <li className="flex flex-col justify-center align-middle text-center border p-3 rounded-lg	 cursor-pointer transition duration-500 hover:shadow-[0_10px_20px_0px_rgba(255,255,255,0.2)]">
      <Link href={href} className="flex flex-col gap-3">
        <Image
          src={imgURL}
          alt={title}
          width={200}
          height={400}
          className="rounded-md"
        />
        <h1 className="list-item-title-style">{title}</h1>
      </Link>
    </li>
  );
};

export default MainCard;
