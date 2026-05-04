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
        import.meta.env.VITE_BACKEND_URL + "/project/get"
      );
      if (res.data.success) setProjects(res.data.projects);
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

  const handleVideoPlay = (id) => setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  const handleVideoPause = (id) => setPlayingVideos((prev) => ({ ...prev, [id]: false }));

  return (
    <>
      <div className="bg-[#d7d7d7] p-5 relative z-2" id="portfolio">
        <Heading title="Portfolio" />
        <Lines />

        {loading ? (
          <div className="grid sm:px-10 px-2 pt-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#c8c8c8] shadow-xl h-full flex flex-col rounded-2xl overflow-hidden animate-pulse">
                <div className="relative h-56 bg-[#b5b5b5] w-full" />
                <div className="px-5 py-4 flex flex-col gap-3">
                  <div className="h-5 bg-[#b5b5b5] w-2/3 rounded-full" />
                  <div className="h-3 bg-[#b5b5b5] w-full rounded-full" />
                  <div className="h-3 bg-[#b5b5b5] w-4/5 rounded-full" />
                </div>
                <div className="flex gap-2 px-5 pb-3">
                  {[1,2,3].map(j => <div key={j} className="h-6 w-16 bg-[#b5b5b5] rounded-full" />)}
                </div>
                <div className="flex gap-2 px-5 pb-4">
                  {[1,2,3].map(j => <div key={j} className="w-16 h-16 bg-[#b5b5b5] rounded-xl" />)}
                </div>
                <div className="px-5 pb-6 flex justify-between items-center mt-auto">
                  <div className="h-5 w-20 bg-[#b5b5b5] rounded-full" />
                  <div className="h-8 w-24 bg-[#b5b5b5] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="grid sm:px-10 px-2 pt-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-[#1A1A1A] shadow-2xl h-full flex flex-col rounded-2xl overflow-hidden border border-[#2e2e2e] hover:border-[#555] transition-all duration-300"
              >
                {/* Main image/video display */}
                <div
                  className="relative h-56 cursor-zoom-in overflow-hidden bg-black"
                  onClick={() => {
                    setModalMedia(activeImages[project._id]);
                    setShowModal(true);
                  }}
                >
                  {activeImages[project._id]?.includes(".mp4") ? (
                    <>
                      <video
                        src={activeImages[project._id]}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        muted
                        onPlay={() => handleVideoPlay(project._id)}
                        onPause={() => handleVideoPause(project._id)}
                      />
                      {!playingVideos[project._id] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <img
                        src={activeImages[project._id]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={project.title}
                      />
                      {/* Zoom hint */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                          🔍 Click to expand
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Title & Description */}
                <div className="px-5 py-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-sm text-[#a0a0a0] mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 px-5 pb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-[#2e2e2e] text-[#d7d7d7] border border-[#3e3e3e] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 px-5 pb-4 overflow-x-auto scroll-hide">
                  {project.images?.map((img, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        setActiveImages((prev) => ({ ...prev, [project._id]: img }))
                      }
                      className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200
                        ${activeImages[project._id] === img
                          ? "border-[#d7d7d7] scale-105"
                          : "border-transparent hover:border-[#555]"
                        }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                  {project.video && (
                    <div
                      onClick={() =>
                        setActiveImages((prev) => ({ ...prev, [project._id]: project.video }))
                      }
                      className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200
                        ${activeImages[project._id] === project.video
                          ? "border-[#d7d7d7] scale-105"
                          : "border-transparent hover:border-[#555]"
                        }`}
                    >
                      <video src={project.video} className="w-full h-full object-cover" muted />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status & Live Link */}
                <div className="mt-auto px-5 py-4 border-t border-[#2e2e2e] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-sm text-[#d7d7d7] font-medium">{project.status}</span>
                  </div>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <button className="group/btn flex items-center gap-1.5 bg-[#d7d7d7] hover:bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200">
                      View Live
                      <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Modal */}
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl leading-none transition-colors"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            {modalMedia?.includes(".mp4") ? (
              <video
                src={modalMedia}
                controls
                autoPlay
                className="max-w-[90%] max-h-[90vh] rounded-2xl shadow-2xl"
              />
            ) : (
              <img
                src={modalMedia}
                className="max-w-[90%] max-h-[90vh] rounded-2xl shadow-2xl object-contain"
                alt=""
              />
            )}
          </motion.div>
        )}

        <Lines />
      </div>
    </>
  );
}

export default PortFolio;