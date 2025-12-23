import { useEffect, useState } from "react";
import Lines from "../Lines";
import axios from "axios";

function PortFolio() {
  const [projects, setProjects] = useState([]);
  const [activeImages, setActiveImages] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMedia, setModalMedia] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});

  const getProducts = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/project/get"
      );
      if (res.data.success) setProjects(res.data.projects);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const defaults = {};
    projects.forEach((project) => {
      if (project.images?.length > 0) {
        defaults[project._id] = project.images[0];
      } else if (project.video) {
        defaults[project._id] = project.video;
      }
    });
    setActiveImages(defaults);
  }, [projects]);

  const handleVideoPlay = (id) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  };

  const handleVideoPause = (id) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <div className="bg-[#d7d7d7] p-5  " id="portfolio">
        <div className="pt-32 flex mb-20 justify-center">
          <h1 className="text-4xl  border-4 px-12 py-4 font-bold">PORTFOLIO</h1>
        </div>
        <Lines />
        <div className="grid px-10 pt-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-gray-300 shadow-2xl rounded-xl overflow-hidden shadow-lg"
            >
              <div
                className="relative h-60 cursor-zoom-in overflow-hidden"
                onClick={() => {
                  setModalMedia(activeImages[project._id]);
                  setShowModal(true);
                }}
              >
                {activeImages[project._id]?.includes(".mp4") ? (
                  <>
                    <video
                      src={activeImages[project._id]}
                      className="w-full h-full object-cover"
                      muted
                      onPlay={() => handleVideoPlay(project._id)}
                      onPause={() => handleVideoPause(project._id)}
                    />
                    {!playingVideos[project._id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white opacity-90"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </>
                ) : (
                  <img
                    src={activeImages[project._id]}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                    alt={project.title}
                  />
                )}
              </div>
              <div className="px-4 py-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4  p-3  ">
                {project.tech.map((t) => (
                  <h1 className="px-4 py-1 rounded-md font-semibold  bg-[#bebebe] ">
                    {t}
                  </h1>
                ))}
              </div>

              <div className="flex gap-2 px-4 p-4 overflow-x-auto">
                {project.images?.map((img, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      setActiveImages((prev) => ({
                        ...prev,
                        [project._id]: img,
                      }))
                    }
                    className="w-20 h-20 rounded-md  overflow-hidden cursor-pointer"
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover hover:scale-110 transition"
                      alt=""
                    />
                  </div>
                ))}
                {project.video && (
                  <div
                    onClick={() =>
                      setActiveImages((prev) => ({
                        ...prev,
                        [project._id]: project.video,
                      }))
                    }
                    className="relative w-20 h-20 rounded-md border overflow-hidden cursor-pointer"
                  >
                    <video
                      src={project.video}
                      className="w-full h-full object-cover"
                      muted
                    />
                    {!playingVideos[project._id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white opacity-80"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="p-3 pb-8 px-5 flex  items-center justify-between">
                <div className="flex items-center  gap-1">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>{project.status}</p>
                </div>
                <a href={project.liveUrl} target="_blank">
                  {" "}
                  <button className="bg-black px-4 rounded-md py-1 cursor-pointer text-white">
                    View Live
                  </button>{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
        {showModal && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            {modalMedia?.includes(".mp4") ? (
              <video
                src={modalMedia}
                controls
                autoPlay
                className="max-w-[90%] max-h-[90%] rounded-xl"
              />
            ) : (
              <img
                src={modalMedia}
                className="max-w-[90%] max-h-[90%] rounded-xl"
                alt=""
              />
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center bg-black text-white">
        <h2 className="text-xl">And many more to come</h2>
      </div>
    </>
  );
}

export default PortFolio;
