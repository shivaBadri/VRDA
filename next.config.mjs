/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // All imagery is served locally from /public/images and rendered with a
  // plain <img> (with a vector fallback), so no remote image hosts need to
  // be allow-listed. If next/image with remote sources is introduced later,
  // add the hosts to `images.remotePatterns` here.
};

export default nextConfig;
