/**
 * Centralized Animation Configuration
 * Use this file to manage all entrance timings and durations site-wide.
 */

export const AMDOCS_EASE = [0.16, 1, 0.3, 1] as const;

export const HERO_TIMINGS = {
  subtitleDelay: 1.0,
  headingDelay: 1.2,
  revealDelay: 2.7, // Shortened Magic Pause: 1.2s -> 2.7s = 1.5s duration
  duration: 1.2,
  revealDuration: 2.0, // Specific duration for the second stage reveal
  ease: AMDOCS_EASE,
};

export const NAVBAR_TIMINGS = {
  delay: 2.7,
  duration: 2.0,
  ease: AMDOCS_EASE,
};

// Global reveal buffer (ms) before starting any individual clock
export const GLOBAL_REVEAL_BUFFER = 100;
