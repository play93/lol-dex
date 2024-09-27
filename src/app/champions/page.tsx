// ISR방식으로 구현
// 재검증 시간(revalidate): 하루(86400초)
// TypeScript의 유틸리티 타입을 사용
// 별도의 Card 컴포넌트를 만들어 재사용성

import Image from "next/image";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

export const revalidate = 86400000; // 진짜 하루마다 갱신되나?

export const ChampionsPage = async () => {
  const response = await fetchChampionList();
  const champions: Champion[] = Object.values(response.data);

  return (
    <>
      <h1>챔피언 페이지 입니다.</h1>
      <ul>
        {champions.map((champion) => (
          <li key={champion.id}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={80}
              height={80}
            />
            <h1>{champion.name}</h1>
            <p>{champion.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ChampionsPage;
