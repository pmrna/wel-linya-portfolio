import { useState } from "react";
import { projects } from "../constants/data";

export default function Project() {
  // State to track the current image and modal status
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    projects[0].images.split(",")[0]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setCurrentImage(projects[index].images.split(",")[0]);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      id="projects"
      className="mx-[3.125rem] font-roboto text-white text-2xl md:text-4xl"
    >
      <div className="flex justify-center">
        <h1 className="font-archivo font-bold text-[#cdcdcd] border-b-2 border-[#cdcdcd] w-fit text-center mb-10">
          PROJECTS
        </h1>
      </div>

      <div className="w-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center gap-16">
        {/* Column 1 */}
        <div className="h-full w-fit md:w-fit">
          <ProjectImage
            src="projects/multi-modal/MULTI_MODAL.jpg"
            title="Multi Modal Transpo - Sierra La Parada"
            onClick={() => openModal(0)}
          />
          <ProjectImage
            src="projects/linear-park/LP_9.jpg"
            title="Proposed Linear Park - Pasig River"
            onClick={() => openModal(1)}
          />
          <ProjectImage
            src="projects/ferry/FERRY_7.jpg"
            title="Ferry Station - Bridgetowne"
            onClick={() => openModal(2)}
          />
        </div>

        {/* Column 2 */}
        <div className="h-full w-fit md:w-fit">
          <ProjectImage
            src="projects/k-12/K-12_3.jpg"
            title="A Proposed K-12 Private School"
            onClick={() => openModal(3)}
          />
          <ProjectImage
            src="projects/cadillac/CADILLAC.jpg"
            title="Car Dealership - Cadillac BGC"
            onClick={() => openModal(4)}
          />
          <ProjectImage
            src="projects/ayda/AYDA_7.jpg"
            title="AYDA Competition - Theatre"
            onClick={() => openModal(5)}
          />
        </div>

        {/* Column 3 */}
        <div className="md:h-[46.8125rem] flex flex-col md:w-fit">
          <ProjectImage
            src="projects/20-storey/TS_3.jpg"
            title="20 Storey Building"
            onClick={() => openModal(6)}
            className="flex-grow"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {currentImage.endsWith(".mp4") ? (
            <video
              autoPlay
              muted
              loop
              disablePictureInPicture
              className="w-full h-[31.25rem] max-w-4xl object-contain"
              src={currentImage}
            />
          ) : (
            <img
              src={currentImage}
              alt="Enlarged"
              className="w-fit h-[31.25rem] max-w-4xl object-contain"
            />
          )}

          {/* Thumbnail Gallery */}
          <ThumbnailGallery
            images={projects[currentIndex].images.split(", ")}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        </Modal>
      )}
    </div>
  );
}

function ProjectImage({
  src,
  title,
  onClick,
  className = "",
}: {
  src: string;
  title: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <>
      <img
        src={src}
        alt={title}
        onClick={onClick}
        className={`rounded-sm w-[25rem] h-[15.625rem] md:h-[12.5rem] object-cover cursor-pointer hover:scale-110 transition transform ease-in-out duration-300 border-2 border-[#cdcdcd] ${className}`}
      />
      <span className="text-[1rem] font-roboto mb-2">{title}</span>
    </>
  );
}

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="flex flex-col justify-center items-center relative mt-10"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 -right-10 text-white text-3xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

function ThumbnailGallery({
  images,
  currentImage,
  setCurrentImage,
}: {
  images: string[];
  currentImage: string;
  setCurrentImage: (image: string) => void;
}) {
  return (
    <div className="flex items-center justify-center space-x-5 p-5">
      {images.map((image, index) => (
        <div key={index} onClick={() => setCurrentImage(image)}>
          {image.endsWith(".mp4") ? (
            <video
              disablePictureInPicture
              src={image}
              className={`w-[6.25rem] h-[4.6875rem] object-cover cursor-pointer ${
                currentImage === image ? "ring-4 ring-[#cdcdcd]" : ""
              }`}
            />
          ) : (
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-[6.25rem] h-[4.6875rem] object-cover cursor-pointer ${
                currentImage === image ? "ring-4 ring-[#cdcdcd]" : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
