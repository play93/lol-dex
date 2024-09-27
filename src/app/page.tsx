// import Image from "next/image";
// SSG 방식
// 글로벌레이아웃설정, 공통 레이아웃 정의
// 앱의 소개, 사용방법
// 메타데이터 설정

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>리그오브 레전드 정보 앱</h1>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
    </div>
  );
}
