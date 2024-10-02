// **아이템 타입 정의**

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
