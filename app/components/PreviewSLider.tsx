import React from "react";
import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import mainImage from "../../public/landscape.png";
import { Dialog, Transition } from "@headlessui/react";
import Preview from "./Preview";
import { SeasonResponse } from "@/types";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface EpisodeSliderDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClosed?: () => void;
  selectedEpisode?: SeasonResponse["Episodes"][0] | null;
  episodeImages: StaticImageData;
  episodePlot: EpisodePlot;
}

interface EpisodePlot {
  plot: string;
}
const PreviewSlider = ({
  open,
  setOpen,
  selectedEpisode,
  episodeImages,
  episodePlot
}: EpisodeSliderDialogProps) => {
  return (
    <Transition.Root show={open}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-50 "
        onClose={() => false}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300 sm:duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300 sm:duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed bottom-0 right-0 bg-white w-[83%] md:w-[40%] max-w-[500px] h-screen flex-col z-20">
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="w-6 h-6 absolute top-4 right-4 z-50 shadow-xl cursor-pointer"
              ><XMarkIcon className="h-full w-full rounded-full bg-white text-black "/></div>
              {selectedEpisode && (
                <Preview
                  title={selectedEpisode.Title}
                  release={selectedEpisode.Released}
                  rating={selectedEpisode.imdbRating}
                  number={selectedEpisode.Episode}
                  episodeImages={episodeImages}
                  episodePlot={episodePlot}
                />
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PreviewSlider;
