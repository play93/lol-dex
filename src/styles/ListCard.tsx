import Image from "next/image";
import Link from "next/link";
import React from "react";

type ListItemProps = {
  name: string;
  imgURL: string;
  description: string;
  href?: string;
};

const ListCard = ({ name, imgURL, description, href }: ListItemProps) => {
  return (
    <li>
      {href ? (
        <Link href={href}>
          <Image src={imgURL} alt={name} width={80} height={80} />
          <h1>{name}</h1>
          <p>{description}</p>
        </Link>
      ) : (
        <>
          <Image src={imgURL} alt={name} width={80} height={80} />
          <h1>{name}</h1>
          <p>{description}</p>
        </>
      )}
    </li>
  );
};

export default ListCard;
