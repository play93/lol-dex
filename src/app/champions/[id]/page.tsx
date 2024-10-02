import React from "react";
import Image from "next/image";
import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata, ResolvingMetadata } from "next";
import "@/styles/championDetail.css";

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
    <div className="w-4/5 m-auto">
      <h1 className="detail-title-style">{champion.name}</h1>
      <span className="detail-keyword-style">{champion.title}</span>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={150}
        height={150}
        className="my-12"
      />
      <p className="detail-description-style mb-5">{champion.lore}</p>
      <article className="detail-stats-box-style">
        <h3 className="detail-sm-title-style">스탯</h3>
        <ul>
          <li className="detail-list-style">공격력: {champion.info.attack}</li>
          <li className="detail-list-style">방어력: {champion.info.defense}</li>
          <li className="detail-list-style">마법력: {champion.info.magic}</li>
          <li className="detail-list-style">
            난이도: {champion.info.difficulty}
          </li>
        </ul>
      </article>
    </div>
  );
};

export default ChampionDetailPage;
