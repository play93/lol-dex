// 2. **아이템 타입 정의**
//     - **Item**: 아이템 목록에서 사용하는 기본 정보 타입.

//     > 힌트:
//     > - 아이템의 가격 정보와 스탯 정보를 포함하도록 타입을 정의하세요.

// export type Item = {
//   data: ItemInfo;
// };

export type ItemInfo = {
  name: string;
  plaintext: string;
  image: {
    full: string;
  };
  gold: {
    base: number; // 베이스 가격
    purchasable: boolean; // 구매 가능 여부
    total: number; // 총 가격
    sell: 210; // 판매가격
  };
  stats: { [key: string]: number }; // => 있을 수도 있고, 없을 수도 있고, 안에 들어갈 내용이 객체마다 다름
};

// export type Item = {
//   data:number
//   name: string;
//   plaintext: string;
//   image: {
//     full: string;
//   };
//   gold: {
//     base: number; // 베이스 가격
//     purchasable: boolean; // 구매 가능 여부
//     total: number; // 총 가격
//     sell: 210; // 판매가격
//   };
// stats:{} => 있을 수도 있고, 없을 수도 있고, 안에 들어갈 내용이 각각 다름
// };
