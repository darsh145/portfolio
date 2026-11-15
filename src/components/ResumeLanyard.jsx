import { useEffect, useState } from "react";
import Lanyard from "./Lanyard.jsx";

const RESUME_URL = "/Darsh_Resume.pdf";

/**
 * React Bits Lanyard as the resume button: drag the badge to swing it,
 * tap it to open the PDF. A real link is kept for keyboard / screen readers.
 *
 * Performance:
 * - the WebGL scene only mounts once the browser is idle, so it doesn't compete
 *   with the project animations loading on the Work page;
 * - on touch devices there's no breeze, so the badge settles and stops rendering,
 *   and the render resolution is capped at 1.5x.
 */
export default function ResumeLanyard() {
  const [ready, setReady] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 600));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const handle = idle(() => setReady(true), { timeout: 2000 });
    return () => cancel(handle);
  }, []);

  const openResume = () => window.open(RESUME_URL, "_blank", "noopener");

  return (
    <>
      {ready && (
        <Lanyard
          frontImage="/resume-badge.svg"
          cardColor="#ffffff"
          finish="glossy"
          size={0.55}
          anchor={0.83}
          strapLength={0.35}
          strapColor="#F15A29"
          strapWidth={0.55}
          metal="silver"
          breeze={touch ? 0 : 0.5}
          maxPixelRatio={touch ? 1.5 : 2}
          onTap={openResume}
        />
      )}
      <a href={RESUME_URL} target="_blank" rel="noopener" className="resume-lanyard-link">
        Open my resume (PDF)
      </a>
    </>
  );
}
