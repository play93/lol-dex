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
    <li>
      <Link href={href}>
        <Image src={imgURL} alt={title} width={80} height={80} />
        <h1>{title}</h1>
      </Link>
    </li>
  );
};

export default MainCard;
