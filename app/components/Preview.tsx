import React from "react";
import Image, { StaticImageData } from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

interface SelectedEpisodeProps {
  title: string;
  rating: string;
  number: string;
  release: string;
  episodeImages: StaticImageData;
  episodePlot: EpisodePlot;
}

interface EpisodePlot {
  plot: string;
}
const Preview = ({
  title,
  number,
  rating,
  release,
  episodeImages,
  episodePlot
}: SelectedEpisodeProps) => {

  return (
    <div className="h-screen">
      <div className="flex flex-1 h-[60%] w-full relative">
        <Image
          src={episodeImages}
          alt={"Main season image background"}
          className="z-0 object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 w-full flex flex-col text-left text-sm md:text-base">
        {/* Rating */}
        <div className="border-b p-8 flex justify-between">
          <p className="font-neuero ">
            Episode {number} -- {release}
          </p>
          <div className="flex justify-center gap-1 md:gap-3">
            <StarIcon className="w-4 h-4 md:h-6 md:w-6 text-yellow-500" />{" "}
            <div className="font-semibold">
              {rating}
              <span className="text-gray-300 font-normal"> /10</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-8">
          <h3 className="font-neueb text-2xl">{title}</h3>
          <p className="font-neuero text-base md:leading-[20.95px]">{episodePlot.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
