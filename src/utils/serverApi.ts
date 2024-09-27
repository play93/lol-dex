import axios from "axios";
//import exp from "constants";

// fetchChampionList 함수 => 챔피언 목록페이지에 사용
export const fetchChampionList = async () => {
  const data = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json"
  );
  const champions = await data.json();
  return champions;
};

// fetchChampionDetail 함수 => 챔피언 상세정보 (이름, 타이틀, 이미지, 설명 등 + 스킬정보, 스탯정보 등)
// export const fetchChampionDetail = async (id: string) => {
//   try {
//     const response = await axios.get(
//       `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${id}.json`
//     );
//     return response.data[id];
//   } catch (error) {
//     console.log("에러가 발생했습니다.", error);
//   }
// };
export const fetchChampionDetail = async (id: string) => {
  const data = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${id}.json`
  );
  const champion = await data.json();
  return champion;
};

// fetchItemList 함수 => 아이템 목록페이지에 사용
