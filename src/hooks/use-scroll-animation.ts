import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

/**
 * Custom hook for scroll-triggered animations.
 * Attaches an IntersectionObserver to an element and returns its ref and inView status.
 *
 * @param {Object} options - Options for the IntersectionObserver.
 * @param {number} [options.threshold=0.1] - A single number or an array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed.
 * @param {string} [options.rootMargin='0px'] - Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
 * @param {boolean} [options.triggerOnce=true] - If true, the callback will only be triggered once when the element enters the viewport.
 * @returns {Object} An object containing:
 *   - `ref`: A React ref to attach to the DOM element.
 *   - `inView`: A boolean indicating whether the element is currently in view.
 */
const useScrollAnimation = (options?: { threshold?: number; rootMargin?: string; triggerOnce?: boolean }) => {
  const { ref, inView } = useInView({
    threshold: options?.threshold ?? 0.1,
    rootMargin: options?.rootMargin ?? "0px",
    triggerOnce: options?.triggerOnce ?? true,
  });

  return { ref, inView };
};

export default useScrollAnimation;