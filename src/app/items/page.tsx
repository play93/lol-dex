import React from "react";
import { ItemInfo } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import ListCard from "@/components/ListCard";

export type Item = Pick<ItemInfo, "name" | "plaintext" | "image">;

const ItemsPage = async () => {
  const response = await fetchItemList();

  // response가 에러 메시지 객체인지 확인
  if ("message" in response) {
    return <div>{response.message}</div>;
  }

  const items = Object.values(response.data);

  return (
    <div>
      <h1 className="title-style">아이템 목록</h1>
      <ul className="list-style">
        {items.map((item, index) => (
          <ListCard
            key={index + item.name}
            imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
            name={item.name}
            description={item.plaintext}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
