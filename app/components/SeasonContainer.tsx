"use client";
import React from "react";
import EpisodeCarousel from "../components/EpisodeCarousel";
import PreviewSlider from "../components/PreviewSLider";
import { useCallback, useState } from "react";
import { SeasonResponse } from "@/types";
import { StaticImageData } from "next/image";

interface SeasonProps {
  episodeImages: StaticImageData[];
  seasonData: SeasonResponse;
  episodePlot: EpisodePlot[];
}

interface EpisodePlot {
  plot: string;
}


const SeasonContainer = ({ seasonData, episodeImages, episodePlot }: SeasonProps) => {
  const [open, setOpen] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<SeasonResponse["Episodes"][0] | null>(null);

  // open dialog and propagate episode data whenever X episode is selected
  const onSelectedEpisode = useCallback((episode: SeasonResponse["Episodes"][0]) => {
    setOpen(true);
    setSelectedEpisode(episode)
  }, [selectedEpisode]);

  return (
    <>
      {seasonData && (
        <>
          <article className="w-full absolute bottom-0 left-0 text-left max-w-full overflow-x-hidden mx-auto bg-gradient-to-b from-transparent to-black opacity-100 py-20 px-10 md:px-20 flex flex-col items-left justify-end">
            <div className="text-left text-white/80 z-50 md:mb-28 mb-10">
              <p className="font-neuelt md:mb-4">Season {seasonData.Season}</p>
              <h2 className="font-neuemd text-4xl md:text-7xl">
                {seasonData.Title}
              </h2>
              <p className="font-neuelt leading-tight text-sm md:text-lg md:leading-[20.95px] flex flex-wrap max-w-[500px]">
                Explores and unravels the mystery of how and why animals
                migrate, 
                showing some of the most dramatic and compelling stories in the{" "}
                
                natural world through spectacular and innovative cinematography.{" "}
              </p>
            </div>
            {/* Episode Carrousel Component */}
            <EpisodeCarousel
              onSelectedEpisode={onSelectedEpisode}
              seasonData={seasonData}
              episodeImages={episodeImages}
              episodePlot={episodePlot}
            />
          </article>

          {/* Preview Slider */}
          <aside className="w-28 h-screen">
            <PreviewSlider
              open={open}
              setOpen={setOpen}
              selectedEpisode={selectedEpisode}
              episodeImages={episodeImages[Number(selectedEpisode && selectedEpisode.Episode) - 1]}
              episodePlot={episodePlot[Number(selectedEpisode && selectedEpisode.Episode) - 1]}
              onClosed={() => setSelectedEpisode(null)}
            />
          </aside>
        </>
      )}
    </>
  );
};

export default SeasonContainer;
