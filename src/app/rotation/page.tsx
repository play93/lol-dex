"use client";

import ListCard from "@/components/ListCard";
import Loading from "@/components/Loading";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import React, { Suspense, useEffect, useState } from "react";

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
        const rotationData = rotation.result.freeChampionIds;
        setRotation(rotationData);

        // 챔피언 정보를 가져옴
        const championData = await fetchChampionList();
        setChampionList(championData);

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
  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div>
      <h1 className="title-style">챔피언 로테이션</h1>
      <Suspense fallback={<Loading />}>
        <ul className="list-style">
          {rotationChampion.map((champion) => (
            <ListCard
              key={champion.id}
              href={`/champions/${champion.id}`}
              imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
              name={champion.name}
              description={champion.title}
            />
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default RotationPage;
