import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import ListCard from "@/components/ListCard";

export const revalidate = 86400; // 하루마다 갱신
//export type ChampionInfo = Pick<Champion, "id" | "name" | "title" | "image">;

const ChampionsPage = async () => {
  const response = await fetchChampionList();
  const champions: Champion[] = Object.keys(response).map(
    (key) => response[key]
  );

  return (
    <>
      <h1 className="title-style">챔피언 목록</h1>
      <ul className="list-style">
        {champions.map((champion) => (
          <ListCard
            key={champion.id}
            href={`/champions/${champion.id}`}
            imgURL={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
            name={champion.name}
            description={champion.title}
          />
        ))}
      </ul>
    </>
  );
};

export default ChampionsPage;
