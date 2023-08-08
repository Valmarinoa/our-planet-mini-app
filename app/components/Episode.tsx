import React from "react";
import Image, { StaticImageData } from "next/image";

interface SelectedEpisodeProps {
  title: string;
  rating: string;
  number: string;
  episodeImages: StaticImageData;
  onSelectedEpisode: () => void;
  episodePlot: EpisodePlot;
}

interface EpisodePlot {
  plot: string;
}

const Episode = ({onSelectedEpisode, title, number, rating, episodeImages, episodePlot}: SelectedEpisodeProps) => {
  return (
    <>
      <div  onClick={onSelectedEpisode} className="w-52 text-white items-center text-left border-transparent transition-all flex-shrink-0 snap-start">
        <div
          className="w-full h-32 relative cursor-pointer"
        >
          <div className="absolute top-0 left-0 bg-white text-black p-2 leading-none font-neueb text-xs">
            {number}
          </div>
          <Image
            className="w-full h-full object-cover"
            src={episodeImages}
            alt={""}
          />
          
        </div>
        <div className="flex flex-col">
          <h3 className="text-left font-neueb text-sm mt-6">
            {/* Subtitle Project */}
            {title}
          </h3>
          <p className="font-neuelt text-xs text-left mt-2">
            {episodePlot.plot}
          </p>
        </div>
      </div>
    </>
  );
};

export default Episode;
