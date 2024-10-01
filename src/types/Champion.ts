// 1. **챔피언 타입 정의**
// - 필요한 경우 타입을 확장 (ㅇ) 하거나 새로운 인터페이스(ㅇ)를 생성할 수 있습니다.

//     - **Champion**: 챔피언 목록에서 사용하는 기본 정보 타입.
export interface Champion {
  id: string;
  key: number;
  image: {
    full: string;
  };
  name: string;
  title: string;
}

//     - **ChampionDetail**: 챔피언 상세 정보에 사용하는 타입.
export interface ChampionDetail extends Champion {
  lore: string; // 스토리?
  allytips: string[]; // 직접플레이할때팁같음
  enemytips: string[]; // 적팀에있을때팁같고
  tags: string[]; // 태그
  info: ChampionInfo; // 정보
}

export interface ChampionInfo {
  attack: number; //공격
  defense: number; //방어
  magic: number; //마술
  difficulty: number; //난이도
}
