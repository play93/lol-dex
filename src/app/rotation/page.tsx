// SSR 클라이언트 사이드 렌더링, 로테이션 정보 표시
// (로테이션 데이터는 주기적으로 변경되므로 클라이언트에서 최신 데이터를 가져오는 것이 적합)
// 챔피언 목록과 동일한 방식으로 챔피언 표시
// useEffect와 useState 훅을 사용해 데이터를 가져오고 상태관리
// 로딩상태와 에러처리를 구현해 사용자 경험 향상
// TypeScript로 상태(useState)와 효과(useEffect) 훅의 타입을 지정하여 안전하게 상태 관리
// 제네릭 타입을 사용하여 useState의 상태 타입을 명시

import React from "react";

const RotationPage = () => {
  return <div>로테이션 페이지 입니다.</div>;
};

export default RotationPage;
