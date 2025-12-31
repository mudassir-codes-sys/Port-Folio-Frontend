// IconBg.js
import { useEffect, useState } from "react";
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiMysql } from "react-icons/di";
import { IoIosGitMerge } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { SiPostman, SiNpm } from "react-icons/si";
import Js from "../assets/JavaScript-logo.png";
import Api from "../assets/rest-api-icon.webp";
import Express from "../assets/expressjs.svg";

const AnimatedIcons = () => {
  const icons = [
    FaHtml5, FaCss3, FaNodeJs, FaReact, RiTailwindCssFill,
    DiMongodb, DiMysql, IoIosGitMerge, FaGithub, VscVscode,
    SiPostman, SiNpm
  ];

  const images = [Js, Api, Express];

  const colors = [
    "#E34F26", "#1572B6", "#339933", "#61DAFB", "#38BDF8",
    "#47A248", "#4479A1", "#F05032", "#181717", "#007ACC",
    "#FF6C37", "#CB3837"
  ];

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const initialPos = [...icons, ...images].map((_, i) => ({
      x: Math.random() * (window.innerWidth - 50),
      y: Math.random() * (window.innerHeight * 2), // Pura content height cover karne ke liye
      dx: Math.random() * 1.5 - 0.75,
      dy: Math.random() * 1.5 - 0.75,
      size: Math.random() * 30 + 25,
      color: colors[i % colors.length],
    }));
    setPositions(initialPos);

    const animate = () => {
      setPositions(prev =>
        prev.map(pos => {
          let x = pos.x + pos.dx;
          let y = pos.y + pos.dy;

          if (x > window.innerWidth - pos.size) x = 0;
          if (x < 0) x = window.innerWidth - pos.size;
          if (y > window.innerHeight * 2 - pos.size) y = 0;
          if (y < 0) y = window.innerHeight * 2 - pos.size;

          return { ...pos, x, y };
        })
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "200%", // Pura content cover
      zIndex: 0, // content ke peeche
      overflow: "hidden"
    }}>
      {positions.map((pos, i) => {
        if (i < icons.length) {
          const Icon = icons[i];
          return (
            <Icon
              key={i}
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                fontSize: pos.size,
                color: pos.color,
                opacity: 0.1,
              }}
            />
          );
        } else {
          const img = images[i - icons.length];
          return (
            <img
              key={i}
              src={img}
              alt="skill"
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                width: pos.size,
                height: pos.size,
                opacity: 0.1,
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default AnimatedIcons;
