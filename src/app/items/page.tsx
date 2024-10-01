// SSG방식, 아이템목록 표시, 정적페이지 ㅇ
// 서버컴포넌트로 작성 , 빌드시 데이터 페칭 ㅇ
// 각 아이템의 이름&아이콘 이미지 표시 => 이미지 최적화를 위해 <Image>컴포넌트 사용 ㅇ
// 그리드 레이아웃을 사용하여 아이템들을 정렬하고 UI를 개선
import React from "react";
import { ItemInfo } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import ListCard from "@/styles/ListCard";

export type Item = Pick<ItemInfo, "name" | "plaintext" | "image">;

const ItemsPage = async () => {
  const response = await fetchItemList();
  const items: Item[] = Object.values(response.data);

  return (
    <div>
      <h1>아이템목록 페이지 입니다.</h1>
      <ul>
        {items.map((item, index) => (
          <ListCard
            key={index}
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
