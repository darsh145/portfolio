import React from "react";
import {
  SiFigma,
  SiPinterest,
  SiFramer,
  SiRive,
  SiDribbble,
  SiNotion,
} from "react-icons/si";

// Higgsfield logo from the Iconify "SVG Logos" set (logos:higgsfield-icon, CC0).
const HiggsfieldLogo = () => (
  <svg className="full" viewBox="0 0 256 256" aria-hidden="true">
    <path
      fill="#dafd55"
      d="M64 0h128c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64H64c-35.346 0-64-28.654-64-64V64C0 28.654 28.654 0 64 0"
    />
    <path
      fill="#1a1a1a"
      d="m214.838 126.297l-.165-1.876c-1.569-18.013-12.871-51.9-44.224-51.9c-23.266 0-40.842 23.816-56.353 44.813c-12.377 16.816-23.1 31.241-34.9 31.241c-3.136-.34-7.178-1.963-9.652-5.633c-2.228-3.33-2.805-7.597-1.651-12.720c1.814-8.109 12.211-15.621 23.183-23.645c6.022-4.267 12.212-8.792 16.502-13.145c12.377-12.377 18.647-21.340 18.647-35.765s-7.673-21.597-14.108-24.670c-12.872-6.145-31.764-2.560-43.810 8.197c-1.814 1.708-3.630 3.328-5.282 4.864C50.897 57.241 42.730 64.840 24 59.032v23.389c24.834 11.354 45.710-10.330 53.630-20.315c6.105-6.573 12.540-10.415 17.327-10.415h.249c2.145.086 3.960.940 5.281 2.477c2.145 2.562 2.970 5.550 2.557 8.877c-.908 7.001-7.921 15.194-20.792 24.157c-15.100 10.500-40.345 28.084-42.327 50.192c-1.486 15.879 6.435 31.756 18.812 37.900c28.877 14.170 46.452-10.243 65.097-36.022c14.274-19.890 27.805-38.754 46.617-38.754c16.913 0 23.183 14.511 23.183 23.646v1.793l-1.650.340c-41.005 7.513-63.365 47.291-63.365 65.643S143.635 226 162.116 226c21.618 0 48.349-19.121 52.640-72.898l.165-1.963H232V126.300h-17.162zm-22.360 27.570c-3.299 32.181-19.224 47.206-28.877 47.206c-4.373 0-10.477-3.757-10.477-10.755c0-7.852 11.303-31.669 36.714-38.753l2.970-.768l-.330 3.073z"
    />
  </svg>
);

// Each tool renders as a small app-style tile so brand marks sit together consistently.
const tools = [
  { name: "Figma", bg: "#1e1e1e", icon: <SiFigma /> },
  { name: "Jitter", src: "/tools/jitter.png" },
  { name: "Higgsfield", icon: <HiggsfieldLogo /> },
  { name: "Pinterest", bg: "#e60023", icon: <SiPinterest /> },
  { name: "Framer", bg: "#0a0a0a", icon: <SiFramer /> },
  { name: "Rive", bg: "#1d1d1d", icon: <SiRive /> },
  { name: "Dribbble", bg: "#ea4c89", icon: <SiDribbble /> },
  { name: "Notion", bg: "#0a0a0a", icon: <SiNotion /> },
];

function Row({ hidden }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {tools.map(({ name, bg, icon, src }) => (
        <li key={name} className="tool">
          <span className="tool-icon" style={bg ? { background: bg } : undefined} aria-hidden="true">
            {src ? <img src={src} alt="" width="22" height="22" loading="lazy" /> : icon}
          </span>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ToolsMarquee() {
  return (
    <div className="marquee" aria-label="Tools I use for design and inspiration">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
