// getChampionRotation 함수 => 클라이언트 컴포넌트에서 사용 (/api/rotation 엔드포인트를 호출하여 로테이션 데이터를 가져옴)

export const getChampionRotation = async () => {
  const data = await fetch(
    "https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-bb3eef5b-82de-4da0-b01f-e95e35fb4541",
    {
      cache: "no-store",
    }
  );
  const rotation = await data.json();
  return rotation;
};
