import { useEffect, useState } from "react";
import { getPhotos } from "../services/photoService";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await getPhotos();
  
      // Sort photos numerically by filename (e.g., 1.jpeg, 2.jpeg, ..., 10.jpeg)
      const sorted = data
        .filter(photo => photo.filename) // ensure url exists
        .sort((a, b) => {
          const nameA = a.filename.split("/").pop().split(".")[0]; // get '1' from '1.jpeg'
          const nameB = b.filename.split("/").pop().split(".")[0];
  
          const numA = parseInt(nameA, 10);
          const numB = parseInt(nameB, 10);
  
          return numA - numB;
        });
  
      setPhotos(sorted);
    };
  
    loadPhotos();
  }, []);
  

  // Group photos by "year - category"
  const grouped = photos.reduce((acc, photo) => {
    const key = `${photo.year} - ${photo.category}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(photo);
    return acc;
  }, {});

  const groupKeys = Object.keys(grouped).sort((a, b) => {
    const [yearA] = a.split(" - ");
    const [yearB] = b.split(" - ");
    return parseInt(yearB) - parseInt(yearA); // newest first
  });

  const handleGroupSelect = (key) => {
    setSelectedGroup(key);
    setCarouselIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedGroup(null);
    setCarouselIndex(0);
  };

  const currentPhotos = selectedGroup ? grouped[selectedGroup] : [];

  return (
    <div className="p-4 bg-base-100 min-h-screen text-base-content">
      <h2 className="text-3xl font-bold mb-6">PrisiMINUS</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title text-2xl">{key}</h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Carousel */}
      {selectedGroup && (
        <dialog open className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">Photos from {selectedGroup}</h3>
              <button
                className="btn btn-sm btn-circle btn-outline"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>

            {/* Carousel Viewer */}
            <div className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden rounded-box bg-base-200">
              <img
                src={currentPhotos[carouselIndex].url}
                alt={currentPhotos[carouselIndex].category}
                className="object-contain max-h-full"
              />

              <button
                className="btn btn-circle absolute left-2 top-1/2 transform -translate-y-1/2"
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === 0 ? currentPhotos.length - 1 : prev - 1
                  )
                }
              >
                ❮
              </button>
              <button
                className="btn btn-circle absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === currentPhotos.length - 1 ? 0 : prev + 1
                  )
                }
              >
                ❯
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {currentPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`btn btn-xs btn-circle ${
                    index === carouselIndex ? "btn-primary" : "btn-outline"
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

