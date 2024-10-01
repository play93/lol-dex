// 동적 렌더링 방식, 동적 메타데이터 생성 ㅇ
// 서버컴포넌트로 작성 서버사이드에서 데이터 가져옴 ㅇ
// 페이지별 메타데이터 => 공식문서 참고 ㅇ
// params의 타입을 정의해 경로 매개변수를 안전하게 새용 ㅇ
// 챔피언의 추가 정보 표시 ㅇ
// 타입스크립트의 인터페이스 확장기능 사용 => 기존 타입확장 ㅇ

import React from "react";
import Image from "next/image";
import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

// 메타데이터
export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  // read route params
  const response = await fetchChampionDetail(params.id);
  const champion = response.data[params.id];

  const championImages = (await parent).openGraph?.images || [];

  return {
    title: `${champion.name} - My Riot App`,
    description: champion.lore,
    openGraph: {
      images: [...championImages],
    },
  };
};

// 챔피언 상세 정보 페이지 컴포넌트
const ChampionDetailPage = async ({ params }: Props) => {
  const response = await fetchChampionDetail(params.id);
  const champion: ChampionDetail = response.data[params.id];

  return (
    <div>
      챔피언 페이지 입니다.
      <h1>{champion.name}</h1>
      <span>{champion.title}</span>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={80}
        height={80}
      />
      <p>{champion.lore}</p>
      <article>
        <h3>스탯</h3>
        <ul>
          <li>공격력: {champion.info.attack}</li>
          <li>방어력: {champion.info.defense}</li>
          <li>마법력: {champion.info.magic}</li>
          <li>난이도: {champion.info.difficulty}</li>
        </ul>
      </article>
    </div>
  );
};

export default ChampionDetailPage;
