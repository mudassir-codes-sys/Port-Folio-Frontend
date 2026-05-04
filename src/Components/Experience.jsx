import { motion } from "framer-motion";
import Lines from "../Lines";
import Heading from "./Heading";


const array = [
    {
        timeLine: ' Feb 2026 – Apr 2026 · Remote',
        title: "Enovatorz",
        role: "Full Stack Developer Intern",
        desc: "Worked on a production-level HRMS application. Built full-stack features across React frontend and Node.js/Express backend, handled MySQL databases, and collaborated in a remote team environment.",
        stack: ["React", "Node.js", "MySQL", "Redux", "Express", "MUI"]
    }
]

function Experience() {
    return (
        <div id="experience" className="bg-[#d7d7d7] px-5 py-10 relative">
            <Heading title="Experience" />
            <Lines />

            <div className="max-w-2xl mx-auto pt-16 pb-16 px-4">
                {array.map((e, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex gap-6"
                    >
                        {/* Left: dot + line */}
                        <div className="flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-black mt-1.5 flex-shrink-0" />
                            <div className="w-px bg-black/20 flex-1 mt-2" />
                        </div>

                        {/* Right: content */}
                        <div className="pb-12">
                            <p className="text-xs text-black/40 font-medium uppercase tracking-widest mb-1">
                                {e.timeLine}
                            </p>
                            <h3 className="text-xl font-bold text-black">{e.title}</h3>
                            <p className="text-sm text-black/60 mt-0.5 mb-4">
                                {e.role}
                            </p>

                            <p className="text-sm text-black/70 leading-relaxed mb-4">
                                {e.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {e?.stack?.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-3 py-1 rounded-full bg-black text-[#d7d7d7] font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Future entry placeholder */}
                {/* <div className="flex gap-6 opacity-30"> */}
                {/* <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full border-2 border-black mt-1.5 flex-shrink-0" />
          </div>
          <p className="text-xs text-black/50 mt-1.5">Your next role...</p>
        </div> */}
            </div>

            <Lines />
        </div>
    );
}

export default Experience;