import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/#about', permanent: true },
      { source: '/about-us.html', destination: '/#about', permanent: true },
      { source: '/ksharsutra', destination: '/#ksharsutra', permanent: true },
      { source: '/ksharsutra.html', destination: '/#ksharsutra', permanent: true },
      { source: '/services', destination: '/#therapies', permanent: true },
      { source: '/services.html', destination: '/#therapies', permanent: true },
      { source: '/contact', destination: '/#footer', permanent: true },
      { source: '/contact.html', destination: '/#footer', permanent: true },
      { source: '/pradhankarma', destination: '/#panchakarma', permanent: true },
      { source: '/pradhankarma.html', destination: '/#panchakarma', permanent: true },
      { source: '/typeofpooravkarma', destination: '/#panchakarma', permanent: true },
      { source: '/typeofpooravkarma.html', destination: '/#panchakarma', permanent: true },
      { source: '/pooravkarma', destination: '/#panchakarma', permanent: true },
      { source: '/pooravkarma.html', destination: '/#panchakarma', permanent: true },
      { source: '/paschatyakarma', destination: '/#panchakarma', permanent: true },
      { source: '/paschatyakarma.html', destination: '/#panchakarma', permanent: true },
      { source: '/snehan', destination: '/#therapies', permanent: true },
      { source: '/snehan.html', destination: '/#therapies', permanent: true },
      { source: '/swedan', destination: '/#therapies', permanent: true },
      { source: '/swedan.html', destination: '/#therapies', permanent: true },
      { source: '/medical-facilities', destination: '/#facilities', permanent: true },
      { source: '/medical-facilities.html', destination: '/#facilities', permanent: true },
      { source: '/ksharsutra-list', destination: '/#ksharsutra', permanent: true },
      { source: '/ksharsutra-list.html', destination: '/#ksharsutra', permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: '/blog', destination: '/blog/index.html' },
      { source: '/blog/:slug', destination: '/blog/:slug.html' },
    ];
  },
};

export default nextConfig;
