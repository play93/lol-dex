"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ListCard from "./ListCard";
import { Champion } from "@/types/Champion";

// 가져온 데이터(로테이션 챔피언 리스트) 타입 정의
interface RotationResponse {
  rotationChampion: Champion[];
}

const RotationList = () => {
  const [rotationChampionList, setRotationChampionList] = useState<Champion[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        setIsLoading(true);
        // 로테이션 정보를 가져옴
        const response = await fetch("/api/rotation");
        const data: RotationResponse = await response.json();
        setRotationChampionList(data.rotationChampion);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log("error : ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRotationData();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <>Error...</>;

  return (
    <ul className="list-style">
      {rotationChampionList.map((champion) => (
        <ListCard
          key={champion.id}
          href={`/champions/${champion.id}`}
          imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
          name={champion.name}
          description={champion.title}
        />
      ))}
    </ul>
  );
};

export default RotationList;
