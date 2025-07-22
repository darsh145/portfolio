import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text = "PRODUCT DESIGNER • UI/UX • ",
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={`m-0 mx-auto rounded-full relative text-black font-bold text-center cursor-pointer origin-center bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ ...controls, opacity: 1 }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const radius = 45; // Fixed radius for better positioning
        const x = Math.cos((rotationDeg * Math.PI) / 180) * radius;
        const y = Math.sin((rotationDeg * Math.PI) / 180) * radius;
        const transform = `translate(${x}px, ${y}px) rotate(${
          rotationDeg + 90
        }deg)`;

        return (
          <span
            key={i}
            className="absolute text-xs md:text-sm font-bold text-black select-none"
            style={{
              transform,
              WebkitTransform: transform,
              left: "50%",
              top: "50%",
              transformOrigin: "center",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
