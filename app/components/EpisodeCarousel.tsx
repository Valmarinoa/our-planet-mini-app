import React, { useRef, useState, useEffect } from "react";
import Episode from "./Episode";
import Preview from "./Preview"; // Import the Preview component
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { SeasonResponse } from "@/types";
import { StaticImageData } from "next/image";

interface SelectedEpisodeProps {
  episodeImages: StaticImageData[];
  seasonData: SeasonResponse;
  onSelectedEpisode: (episode: SeasonResponse["Episodes"][0]) => void;
  episodePlot: EpisodePlot[];
}

interface EpisodePlot {
  plot: string;
}
const EpisodeCarousel = ({
  episodeImages,
  episodePlot,
  seasonData,
  onSelectedEpisode,
}: SelectedEpisodeProps) => {
  const [selectedEpisode, setSelectedEpisode] = useState<
    SeasonResponse["Episodes"][0] | null
  >(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Arrrow controls to slide through carrousel content
  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  //  Scrolling into View
  useEffect(() => {
    if (selectedEpisode && carouselRef.current) {
      selectedEpisodeRef?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, [selectedEpisode]);

  let selectedEpisodeRef: HTMLElement | null = null;

  const setSelectedEpisodeRef = (ref: HTMLElement | null) => {
    selectedEpisodeRef = ref;
  };

  return (
    <div className="relative overflow-x-hidden" style={{ overflowX: "hidden" }}>
      <div
        className="flex flex-row flex-nowrap gap-14 overflow-x-hidden"
        ref={carouselRef}
      >
        {seasonData.Episodes.map((episode, i) => (
          <div
            key={i}
            ref={selectedEpisode === episode ? setSelectedEpisodeRef : null}
          >
            <Episode
              onSelectedEpisode={() => {
                onSelectedEpisode(episode);
              }}
              title={episode.Title}
              number={episode.Episode}
              rating={episode.imdbRating}
              episodeImages={episodeImages[i]}
              episodePlot={episodePlot[i]}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-end gap-3 pt-8 w-full text-white/50">
        <ArrowLeftIcon
          className="w-6 h-6 cursor-pointer hover:text-white"
          onClick={handleScrollLeft}
        />
        <ArrowRightIcon
          className="w-6 h-6 cursor-pointer hover:text-white"
          onClick={handleScrollRight}
        />
      </div>
      {selectedEpisode && (
        <Preview
          release={selectedEpisode.Released}
          title={selectedEpisode.Title}
          number={selectedEpisode.Episode}
          rating={selectedEpisode.imdbRating}
          episodePlot={episodePlot[Number(selectedEpisode.Episode) - 1]}
          episodeImages={episodeImages[Number(selectedEpisode.Episode) - 1]}
        />
      )}
    </div>
  );
};

export default EpisodeCarousel;
