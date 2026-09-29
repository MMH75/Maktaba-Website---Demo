import type { NextConfig } from "next";

// Set by the GitHub Pages workflow to "/<repo-name>" (the site lives at
// username.github.io/<repo-name>/). Empty for Vercel and local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit plain HTML/CSS/JS into `out/` so any static host can serve it.
  output: "export",
  // Static hosts have no image-resizing server.
  images: { unoptimized: true },
  // Emit `about-us/index.html` instead of `about-us.html` so static hosts resolve clean URLs.
  trailingSlash: true,
  basePath,
};

export default nextConfig;
