/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/job-openings',
        destination: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL}/json/GetJobInfo/1/16/%20/%20/%20/`,
      },
    ];
  },
};

module.exports = nextConfig;