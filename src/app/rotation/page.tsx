// CSR 클라이언트 사이드 렌더링, 로테이션 정보 표시
// (로테이션 데이터는 주기적으로 변경되므로 클라이언트에서 최신 데이터를 가져오는 것이 적합)
// 챔피언 목록과 동일한 방식으로 챔피언 표시 (ㅇ)
// useEffect와 useState 훅을 사용해 데이터를 가져오고 상태관리 (ㅇ)
// 로딩상태와 에러처리를 구현해 사용자 경험 향상
// TypeScript로 상태(useState)와 효과(useEffect) 훅의 타입을 지정하여 안전하게 상태 관리
// 제네릭 타입을 사용하여 useState의 상태 타입을 명시

// - `app/rotation/page.tsx` 파일을 **클라이언트 컴포넌트**로 작성합니다. (ㅇ)
// - 가져온 데이터를 기반으로 챔피언 목록을 렌더링합니다.

"use client";

import ListCard from "@/components/ListCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import React, { useEffect, useState } from "react";

const RotationPage = () => {
  const [rotation, setRotation] = useState<number[]>([]);
  const [championList, setChampionList] = useState<Champion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        // 로테이션 정보를 가져옴
        const data = await fetch("/api/rotation");
        const rotation = await data.json();
        console.log("rotation:", rotation);
        const rotationData = rotation.result.freeChampionIds;
        //const rotationData = await getChampionRotation();
        setRotation(rotationData);
        console.log(rotationData);

        // 챔피언 정보를 가져옴
        const championData = await fetchChampionList();
        setChampionList(championData);
        console.log(championData);

        //다가져오면 로딩을 false로
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log("error : ", error);
      }
    };

    fetchRotationData();
  }, []);

  // 로테이션 정보와 일치하는 챔피언 정보
  const rotationChampion = Object.values(championList).filter((champion) =>
    rotation.includes(Number(champion.key))
  );
  console.log(rotationChampion);
  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div>
      로테이션 페이지 입니다.
      {rotationChampion.map((champion) => (
        <ListCard
          key={champion.id}
          href={`/champions/${champion.id}`}
          imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
          name={champion.name}
          description={champion.title}
        />
      ))}
    </div>
  );
};

export default RotationPage;
