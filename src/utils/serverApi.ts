import { Champion, ChampionFullInfo } from "@/types/Champion";
import { ItemFullInfo } from "@/types/Item";

// 공통으로 들어가는 url
const commonUrl = "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR";

// fetchChampionList 함수 (ISR 방식) => 챔피언 목록페이지에 사용
export const fetchChampionList = async () => {
  const data = await fetch(`${commonUrl}/champion.json`);
  const champions = await data.json();

  if (!data.ok) {
    return null;
  }
  const result: Champion[] = Object.values(champions.data);
  return result;
};

// fetchChampionDetail 함수 (동적 렌더링 방식) => 챔피언 상세정보 (이름, 타이틀, 이미지, 설명 등 + 스킬정보, 스탯정보 등)
export const fetchChampionDetail = async (id: string) => {
  const data = await fetch(`${commonUrl}/champion/${id}.json`);

  const champion: ChampionFullInfo = await data.json();

  const championDetailData = champion.data[id];

  if (!data.ok) {
    return { message: "에러가 발생했습니다." };
  }
  return championDetailData;
};

// fetchItemList 함수 (SSG 방식)=> 아이템 목록페이지에 사용
export const fetchItemList = async () => {
  const data = await fetch(`${commonUrl}/item.json`);

  const item: ItemFullInfo = await data.json();

  if (!data.ok) {
    return { message: "에러가 발생했습니다." };
  }

  return item;
};
