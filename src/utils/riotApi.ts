// getChampionRotation 함수 => 클라이언트 컴포넌트에서 사용 (/api/rotation 엔드포인트를 호출하여 로테이션 데이터를 가져옴)

export const getChampionRotation = async () => {
  const data = await fetch("/api/rotation");
  console.log(data);
  const rotation = await data.json();
  return rotation.freeChampionIds;
};
