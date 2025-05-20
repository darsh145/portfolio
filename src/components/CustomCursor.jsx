import React, { useState, useEffect } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      // Check if hovering over a clickable element
      const target = e.target;
      const isTargetClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.onclick ||
        target.role === "button" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsClickable(isTargetClickable);
    };

    const hideOnLeave = () => setVisible(false);
    const showOnEnter = () => setVisible(true);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", hideOnLeave);
    document.addEventListener("mouseenter", showOnEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", hideOnLeave);
      document.removeEventListener("mouseenter", showOnEnter);
      // Restore default cursor
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none", // Makes the cursor passthrough for clicks
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 150ms ease",
      }}
    >
      <img
        src="./figcursor.png" // Changed from "/figcursor.png"
        alt=""
        width={150}
        height={150}
        style={{
          transform: "translate(-50%, -50%)",
          display: "block",
          transition: "transform 150ms ease-out",
        }}
      />

      {isClickable && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(-50%, -50%)",
            width: "8px",
            height: "8px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            opacity: 0.7,
            boxShadow: "0 0 5px rgba(255,255,255,0.5)",
            transition: "all 150ms ease",
          }}
        />
      )}
    </div>
  );
}
