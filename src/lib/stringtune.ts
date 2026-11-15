import {
  StringTune,
  StringProgress,
  StringParallax,
  StringMagnetic,
  StringLerp,
  StringImpulse,
  StringSpotlight,
} from '@fiddle-digital/string-tune';

/**
 * Initialises StringTune once per page: smooth scrolling on desktop,
 * native scrolling on touch devices, plus attribute-driven effects:
 *   string="parallax"  string-factor="0.2"
 *   string="progress"
 *   string="magnetic"  string-strength="0.3"
 *   string="lerp"
 *   string="impulse|spotlight"  (see XmasTree.astro)
 */
export function initStringTune(): StringTune {
  const st = StringTune.getInstance();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  st.scrollDesktopMode = reduceMotion ? 'default' : 'smooth';
  st.scrollMobileMode = 'default';

  st.scroll.configure({
    speed: 0.1,
    acceleration: 0.6,
    smoothness: 0.6,
    multiplier: 1,
  });

  st.use(StringProgress);
  st.use(StringParallax);
  st.use(StringMagnetic);
  st.use(StringLerp);
  st.use(StringImpulse);
  st.use(StringSpotlight);

  st.start(60);

  (window as any).stringTune = st;
  return st;
}

/**
 * Re-measure all StringTune objects. Call after layout changes that observers
 * may miss (e.g. toggling `hidden` on whole views), so --progress stays accurate.
 */
export function refreshStringTune() {
  const st = (window as any).stringTune as StringTune | undefined;
  if (!st) return;
  requestAnimationFrame(() => st.onResize(true));
}

/** Jump/scroll to a position through StringTune so its internal state stays in sync. */
export function scrollToTop(immediate = true) {
  const st = (window as any).stringTune as StringTune | undefined;
  if (st) st.scrollTo({ position: 0, immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' });
}
