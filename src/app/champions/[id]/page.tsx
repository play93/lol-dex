// 동적 렌더링 방식, 동적 메타데이터 생성
// 서버컴포넌트로 작성 서버사이드에서 데이터 가져옴
// 페이지별 메타데이터 => 공식문서 참고
// params의 타입을 정의해 경로 매개변수를 안전하게 새용
// 챔피언의 추가 정보 표시
// 타입스크립트의 인터페이스 확장기능 사용 => 기존 타입확장

// 챔피언 상세 정보 페이지 컴포넌트
function ChampionDetailPage() {
  return <div>챔피언 페이지 입니다.</div>;
}

export default ChampionDetailPage;
