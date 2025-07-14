import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineVideoCameraBack } from 'react-icons/md';
import { TbPhoto } from 'react-icons/tb';
import YouTube from 'react-youtube';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

interface MediaProps {
  src: string;
  alt: string;
}

interface Props {
  title: string;
  description?: string;
  images: MediaProps[];
  videos?: MediaProps[];
}

export const CardProjects: React.FC<Props> = ({
  title,
  description,
  images,
  videos,
}) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleOpenGallery = (index: number) => {
    setSlideIndex(index);
    setOpenGallery(true);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
    setSlideIndex(0);
  };

  return (
    <>
      <div className="group w-full max-w-[870px] overflow-hidden rounded-3xl border-[1px] border-[#22362828] bg-[var(--green)] p-2.5 pb-10 text-[var(--pearl)] shadow-lg lg:w-[870px]">
        <div className="relative mb-4 overflow-hidden rounded-2xl">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={350}
            height={230}
            className="h-56 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 lg:h-[460px]"
            priority
          />

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              className="z-10 flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 font-medium text-[var(--green)] transition-colors duration-300 ease-in-out hover:bg-[var(--green)] hover:text-white"
              onClick={() => handleOpenGallery(0)}
            >
              <span>Imagem</span>

              <TbPhoto className="text-lg" />
            </button>

            {videos && videos.length > 0 && (
              <button
                className="z-10 flex items-center gap-2.5 rounded-full border-[1px] border-white px-4 py-2.5 font-medium text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-[var(--green)]"
                onClick={() => handleOpenGallery(images.length)}
              >
                <span>Vídeo</span>

                <MdOutlineVideoCameraBack className="text-lg" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 px-3.5 xl:gap-10">
          <h4 className="text-xl font-semibold">{title}</h4>

          {description && <p className="font-medium">{description}</p>}
        </div>
      </div>

      <Lightbox
        open={openGallery}
        close={handleCloseGallery}
        plugins={[Video]}
        index={slideIndex}
        slides={[
          ...images,
          ...(videos?.map(video => ({
            src: video.src,
            type: 'video',
            alt: video.alt,

            sources: [
              {
                src: video.src,
                type: 'text/html',
              },
            ],
          })) || []),
        ]}
        render={{
          slideContainer: ({ slide }) =>
            slide.type === 'video' ? (
              <YouTube
                videoId={slide.sources[0].src}
                opts={{
                  height: '100%',
                  width: '100%',
                  playerVars: { autoplay: 1, mute: 1 },
                }}
                className="h-4/5 w-10/12 rounded-2xl"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt || ''}
                className="yarl__slide_image h-auto w-10/12 object-contain"
                width={800}
                height={600}
                unoptimized
              />
            ),
        }}
      />
    </>
  );
};
