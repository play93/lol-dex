// import Image from "next/image";
// SSG 방식 ㅇ
// 글로벌레이아웃설정, 공통 레이아웃 정의 ㅇ
// 앱의 소개, 사용방법 ㅇ
// 메타데이터 설정 ㅇ

import MainCard from "@/components/MainCard";
import { Metadata } from "next";
import championListImg from "@/public/championList.webp";
import championRotation from "@/public/championRotation.webp";
import itemList from "@/public/itemList.webp";

//메타데이터
export const metadata: Metadata = {
  title: "리그오브 레전드 정보 앱",
  description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>리그오브 레전드 정보 앱</h1>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      <ul>
        <MainCard
          title={"챔피언 목록 보기"}
          imgURL={championListImg}
          href={"/champions"}
        />
        <MainCard
          title={"아이템 목록 보기"}
          imgURL={itemList}
          href={"/items"}
        />
        <MainCard
          title={"금주 로테이션 확인"}
          imgURL={championRotation}
          href={"/rotation"}
        />
      </ul>
    </div>
  );
}
