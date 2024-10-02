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
    <li className="list-item-style">
      {href ? (
        <Link href={href}>
          <Image
            src={imgURL}
            alt={name}
            width={90}
            height={90}
            className="mb-4 mx-auto"
          />
          <h1 className="list-item-title-style">{name}</h1>
          <p className="list-description-title-style">{description}</p>
        </Link>
      ) : (
        <>
          <Image
            src={imgURL}
            alt={name}
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="list-item-title-style">{name}</h1>
          <p className="list-description-title-style">{description}</p>
        </>
      )}
    </li>
  );
};

export default ListCard;
