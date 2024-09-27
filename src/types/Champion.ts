// 1. **챔피언 타입 정의**

//     `types/Champion.ts` 파일을 생성하고 다음과 같이 타입을 정의합니다:

//     - **Champion**: 챔피언 목록에서 사용하는 기본 정보 타입.
//     - **ChampionDetail**: 챔피언 상세 정보에 사용하는 타입.

//     > 힌트:
//     >
//     > - Riot의 Data Dragon API에서 제공하는 챔피언 데이터 구조를 참고하세요.
//     > - 필요한 경우 타입을 확장하거나 새로운 인터페이스를 생성할 수 있습니다.

export type Champion = {
  id: string;
  image: {
    full: string;
  };
  name: string;
  title: string;
};

export type ChampionDetail = {
  id: string;
  name: string; // 이름
  title: string; // 별명?
  image: {
    full: string;
  };
  lore: string; // 스토리?
  allytips: string[]; // 직접플레이할때팁같음
  enemytips: string[]; // 적팀에있을때팁같고
  tags: string[]; // 태그
  info: ChampionInfo; // 정보
};

export type ChampionInfo = {
  attack: number; //공격
  defense: number; //방어
  magic: number; //마술
  difficulty: number; //난이도
};
