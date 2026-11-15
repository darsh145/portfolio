import Lanyard from "./Lanyard.jsx";

const RESUME_URL = "/Darsh_Resume.pdf";

/**
 * React Bits Lanyard as the resume button: drag the badge to swing it,
 * tap it to open the PDF. A real link is kept for keyboard / screen readers.
 */
export default function ResumeLanyard() {
  const openResume = () => window.open(RESUME_URL, "_blank", "noopener");

  return (
    <>
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
        onTap={openResume}
      />
      <a href={RESUME_URL} target="_blank" rel="noopener" className="resume-lanyard-link">
        Open my resume (PDF)
      </a>
    </>
  );
}
