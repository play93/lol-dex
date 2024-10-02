import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY!;

export async function GET(request: Request) {
  const data = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`,
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
    }
  );
  const result = await data.json();
  console.log(request);
  return NextResponse.json({ result });
}
