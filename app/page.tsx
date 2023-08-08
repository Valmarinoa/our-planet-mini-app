import React from "react";
import Image from "next/image";
import mainImage from "../public/main.png";
import first from "../public/1.png";
import second from "../public/2.png";
import third from "../public/3.png";
import fourth from "../public/4.png";
import fifth from "../public/5.png";
import sixth from "../public/6.png";
import seventh from "../public/7.png";
import eighth from "../public/8.png";
import SeasonContainer from "./components/SeasonContainer";
import { episodeImagesAdded, episodePlotAdded } from "@/episodeData";

// Manually added images and plot per episode
const episodeImages = episodeImagesAdded;

const episodePlot = episodePlotAdded;

// Fetching data
async function fetchSeason() {
  const apiKey = "e27083ce";
  const res = await fetch(
    `http://www.omdbapi.com/?t=our+planet&Season=1&plot&apikey=${apiKey}`
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const seasonData = await fetchSeason();

  return (
    <main className="flex h-screen w-screen flex-col md:flex-row bg-black relative">
      <section className="relative flex-1 flex">
        <div className="absolute top-0 left-0 w-full h-screen opacity-60">
          <Image
            src={mainImage}
            alt={"Main season image background"}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* content */}
        <SeasonContainer
          seasonData={seasonData}
          episodeImages={episodeImages}
          episodePlot={episodePlot}
        />
      </section>
    </main>
  );
}
