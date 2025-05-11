import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { getPhotos } from "../services/photoService";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await getPhotos();

      const sorted = data
        .filter(photo => photo.filename)
        .sort((a, b) => {
          const nameA = parseInt(a.filename.split("/").pop().split(".")[0], 10);
          const nameB = parseInt(b.filename.split("/").pop().split(".")[0], 10);
          return nameA - nameB;
        });

      setPhotos(sorted);
    };

    loadPhotos();
  }, []);

  const grouped = photos.reduce((acc, photo) => {
    const key = `${photo.year} - ${photo.category}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(photo);
    return acc;
  }, {});

  const groupKeys = Object.keys(grouped).sort((a, b) => {
    const [yearA] = a.split(" - ");
    const [yearB] = b.split(" - ");
    return parseInt(yearB) - parseInt(yearA);
  });

  const handleGroupSelect = (key) => {
    setSelectedGroup(key);
    setCarouselIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedGroup(null);
    setCarouselIndex(0);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(prev => !prev);
  };

  const currentPhotos = selectedGroup ? grouped[selectedGroup] : [];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCarouselIndex((prev) => (prev + 1) % currentPhotos.length),
    onSwipedRight: () =>
      setCarouselIndex((prev) =>
        prev === 0 ? currentPhotos.length - 1 : prev - 1
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="p-4 bg-base-100 min-h-screen text-base-content">
      <h2 className="text-3xl font-bold mb-6 text-center">PrisiMINUS</h2>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {groupKeys.map((key) => {
          const previewPhoto = grouped[key][0];
          return (
            <div
              key={key}
              className="card cursor-pointer shadow-lg image-full"
              onClick={() => handleGroupSelect(key)}
            >
              <figure>
                <img
                  src={previewPhoto.url}
                  alt={previewPhoto.category}
                  className="w-full h-40 object-cover"
                />
              </figure>
              <div className="card-body justify-end p-2">
                <h2 className="card-title text-md sm:text-lg">{key}</h2>
              </div>
            </div>
          );
        })}
      </div>

      {selectedGroup && (
        <dialog open className="modal modal-open" id="gallery-modal">
          <div className="modal-box w-full max-w-4xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg sm:text-xl">
                {selectedGroup}
              </h3>
              <button
                className="btn btn-sm btn-circle btn-outline"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>

            {/* Carousel */}
            <div
              {...swipeHandlers}
              className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden rounded-lg bg-base-200"
            >
              <img
                src={currentPhotos[carouselIndex].url}
                alt={currentPhotos[carouselIndex].category}
                onClick={toggleZoom}
                className="object-contain max-h-full transition-all duration-300 ease-in-out"
                loading="lazy"
              />

              {/* Preload next and previous images */}
              <img
                src={currentPhotos[(carouselIndex + 1) % currentPhotos.length]?.url}
                className="hidden"
                alt=""
                aria-hidden="true"
              />
              <img
                src={currentPhotos[(carouselIndex - 1 + currentPhotos.length) % currentPhotos.length]?.url}
                className="hidden"
                alt=""
                aria-hidden="true"
              />



              {/* Prev */}
              <button
                className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-transparent border-none hover:scale-125 transition"
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === 0 ? currentPhotos.length - 1 : prev - 1
                  )
                }
              >
                ❮
              </button>

              {/* Next */}
              <button
                className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-transparent border-none hover:scale-125 transition"
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === currentPhotos.length - 1 ? 0 : prev + 1
                  )
                }
              >
                ❯
              </button>
            </div>

            {/* Dots */}
            <div className="flex flex-wrap justify-center gap-1 mt-3 max-w-full overflow-x-auto">
              {currentPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`btn btn-xs rounded-full ${index === carouselIndex ? "btn-primary" : "btn-outline"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

          </div>
        </dialog>
      )}
    </div>
  );
};

export default Gallery;
