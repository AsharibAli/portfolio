import type { NextConfig } from "next";

// experimental.inlineCss was evaluated and rejected on Next 16.0.10: it
// removed the render-blocking stylesheet but exploded Total Blocking Time
// from ~150ms to 3-7s in Lighthouse. Re-evaluate only with measurements.
const nextConfig: NextConfig = {};

export default nextConfig;

