// ISR방식으로 구현 ㅇ
// 재검증 시간(revalidate): 하루(86400초) ㅇ
// TypeScript의 유틸리티 타입을 사용 (ㅇ) => pick 사용
// 별도의 Card 컴포넌트를 만들어 재사용성 ㅇ

import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import ListCard from "@/components/ListCard";

export const revalidate = 86400; // 진짜 하루마다 갱신되나? => 확인 ㅇ
export type ChampionInfo = Pick<Champion, "id" | "name" | "title" | "image">;

export const ChampionsPage = async () => {
  const response = await fetchChampionList();
  const champions: Champion[] = Object.keys(response).map(
    (key) => response[key]
  );

  return (
    <>
      <h1>챔피언 페이지 입니다.</h1>
      <ul>
        {champions.map((champion) => (
          <ListCard
            key={champion.id}
            href={`/champions/${champion.id}`}
            imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
            name={champion.name}
            description={champion.title}
          />
        ))}
      </ul>
    </>
  );
};

export default ChampionsPage;
