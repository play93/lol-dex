import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY!;

export async function GET(request: Request) {
  // 로테이션 정보를 가져옴
  const data = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`,
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
    }
  );
  if (!data.ok) {
    return { message: "에러가 발생했습니다." };
  }

  const result = await data.json(); // 받아온 정보
  console.log(request);

  const rotationData = result.freeChampionIds; // 받아온 정보 중에서 freeChampIds만 빼서 변수에 담음

  const champion: Champion = await fetchChampionList(); // 모든 챔피언 리스트 가져옴

  // 가져온 모든 챔피언 리스트를 rotationData로 필터링
  const rotationChampion: Champion[] = Object.values(champion).filter(
    (champion) => rotationData.includes(Number(champion.key))
  );

  // 필터링한 값을 리턴
  return NextResponse.json({ rotationChampion });
}
