import { useEffect, useState } from "react";
import Lanyard from "./Lanyard.jsx";

const RESUME_URL = "/Darsh_Resume.pdf";
const BADGE = "/resume-badge.svg";

/**
 * React Bits Lanyard as the resume button: drag the badge to swing it,
 * tap it to open the PDF.
 *
 * A static badge (plain link) is always rendered first and stays visible until
 * the WebGL badge has actually drawn — and comes back if WebGL is unavailable
 * or the context is lost (low memory on phones), so the resume is never missing.
 *
 * Performance:
 * - the WebGL scene mounts once the browser is idle, so it doesn't compete
 *   with the project animations loading on the Work page;
 * - on touch devices there's no breeze, so the badge settles and stops rendering,
 *   and the render resolution is capped at 1.5x.
 */
export default function ResumeLanyard() {
  const [mount3d, setMount3d] = useState(false);
  const [state, setState] = useState("loading"); // loading | ready | failed
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
    let cancelled = false;
    const go = () => !cancelled && setMount3d(true);
    const handle =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(go, { timeout: 2000 })
        : window.setTimeout(go, 600);
    return () => {
      cancelled = true;
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, []);

  const openResume = () => window.open(RESUME_URL, "_blank", "noopener");
  const show3d = mount3d && state !== "failed";

  return (
    <>
      {show3d && (
        <div className={`resume-lanyard-3d ${state === "ready" ? "is-ready" : ""}`}>
          <Lanyard
            frontImage={BADGE}
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
            onReady={() => setState("ready")}
            onError={() => setState("failed")}
          />
        </div>
      )}

      {/* Static badge: visible until the 3D one is ready, or permanently if it fails.
          It is also the real link for keyboard and screen-reader users. */}
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener"
        aria-label="Open my resume (PDF)"
        className={`resume-badge-static ${state === "ready" ? "is-hidden" : ""}`}
      >
        <span className="resume-badge-strap" aria-hidden="true" />
        <img src={BADGE} alt="" width="640" height="900" />
      </a>
    </>
  );
}
