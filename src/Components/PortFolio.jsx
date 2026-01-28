import { useEffect, useMemo, useState } from "react";
import Lines from "../Lines";
import axios from "axios";
import { motion, easeOut } from "framer-motion";
import Heading from "./Heading";

function PortFolio() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [activeImages, setActiveImages] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMedia, setModalMedia] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/project/get",
      );
      if (res.data.success) setProjects(res.data.projects);
      console.log(res.data.projects);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const defaultActiveImages = useMemo(() => {
    const defaults = {};
    projects.forEach((project) => {
      if (project.images?.length > 0) defaults[project._id] = project.images[0];
      else if (project.video) defaults[project._id] = project.video;
    });
    return defaults;
  }, [projects]);

  useEffect(() => {
    setActiveImages(defaultActiveImages);
  }, [defaultActiveImages]);

  const handleVideoPlay = (id) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  };

  const handleVideoPause = (id) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <div className="bg-[#d7d7d7] p-5 relative z-2" id="portfolio">
        <Heading title="Portfolio" />
        <Lines />
        {loading ? (
          <div className="grid sm:px-10 px-2 pt-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 shadow-2xl h-full flex flex-col rounded-xl overflow-hidden animate-pulse"
              >
                {/* Image / Video placeholder */}
                <div className="relative h-60 bg-gray-400 w-full mb-2"></div>

                {/* Title & Description */}
                <div className="px-4 py-2 flex flex-col gap-2">
                  <div className="h-6 bg-gray-400 w-3/4 rounded"></div>
                  <div className="h-4 bg-gray-400 w-full rounded"></div>
                </div>

                {/* Tech stack placeholder */}
                <div className="flex sm:gap-x-4 flex-wrap gap-2 p-2">
                  <div className="h-6 w-16 bg-gray-400 rounded-md"></div>
                  <div className="h-6 w-16 bg-gray-400 rounded-md"></div>
                  <div className="h-6 w-16 bg-gray-400 rounded-md"></div>
                </div>

                {/* Thumbnails placeholder */}
                <div className="flex gap-2 px-4 p-4 overflow-x-auto">
                  <div className="w-20 h-20 bg-gray-400 rounded-md"></div>
                  <div className="w-20 h-20 bg-gray-400 rounded-md"></div>
                  <div className="w-20 h-20 bg-gray-400 rounded-md"></div>
                </div>

                {/* Status & Button */}
                <div className="p-3 pb-8 px-5 flex items-center mt-auto justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-400 rounded"></div>
                  </div>
                  <div className="h-6 w-24 bg-gray-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="grid sm:px-10  px-2 pt-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10"
          >
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-gray-200 shadow-2xl h-full flex flex-col  rounded-xl overflow-hidden "
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
                      className="w-full h-full object-center hover:scale-110 transition-transform"
                      alt={project.title}
                    />
                  )}
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 ">
                    {project.description}
                  </p>
                </div>

                <div className="flex sm:gap-x-4 flex-wrap gap-2  p-2  ">
                  {project.tech.map((t) => (
                    <h1 className="px-2 py-1 rounded-md text-xs bg-black text-white font-semibold ">
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
                <div className="p-3 pb-8 px-5 flex  items-center mt-auto justify-between">
                  <div className="flex items-center  gap-2">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p className="font-semibold text-lg"> {project.status}</p>
                  </div>
                  <a href={project.liveUrl} target="_blank">
                    {" "}
                    <button className="bg-black px-4 rounded-md py-1  cursor-pointer text-white">
                      View Live
                    </button>{" "}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        )}
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
        <Lines />
      </div>
    </>
  );
}

export default PortFolio;
