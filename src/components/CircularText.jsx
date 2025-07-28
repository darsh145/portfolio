import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const CircularText = ({
  text = "PRODUCT DESIGNER • UI/UX • ",
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const [isClient, setIsClient] = useState(false);
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: {
        rotate: {
          from: start,
          to: start + 360,
          ease: "linear",
          duration: spinDuration,
          type: "tween",
          repeat: Infinity,
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    });
  }, [spinDuration, controls, rotation, isClient]);

  const handleHoverStart = () => {
    if (!isClient) return;
    if (onHover === "speedUp") {
      controls.start({
        rotate: rotation.get() + 360,
        transition: {
          rotate: {
            ease: "linear",
            duration: spinDuration / 3,
            type: "tween",
            repeat: Infinity,
          },
        },
      });
    }
  };

  const handleHoverEnd = () => {
    if (!isClient) return;
    controls.start({
      rotate: rotation.get() + 360,
      transition: {
        rotate: {
          ease: "linear",
          duration: spinDuration,
          type: "tween",
          repeat: Infinity,
        },
      },
    });
  };

  // Return static placeholder during SSR to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className={`rounded-full bg-gray-200 animate-pulse ${className}`}>
        {/* Static placeholder circle */}
      </div>
    );
  }

  return (
    <motion.div
      className={`m-0 mx-auto rounded-full relative text-black font-bold text-center cursor-pointer origin-center bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const radius = 45;
        const x = Math.cos((rotationDeg * Math.PI) / 180) * radius;
        const y = Math.sin((rotationDeg * Math.PI) / 180) * radius;

        return (
          <span
            key={i}
            className="absolute text-xs md:text-sm font-bold text-black select-none"
            style={{
              transform: `translate(${Math.round(x * 100) / 100}px, ${
                Math.round(y * 100) / 100
              }px) rotate(${Math.round((rotationDeg + 90) * 100) / 100}deg)`,
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
