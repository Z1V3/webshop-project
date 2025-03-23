/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5000/api/:path*",
          has: [{ type: "host", value: "localhost:3000" }],
          missing: [{ type: "header", key: "next-auth" }] // Prevents NextAuth requests from being redirected
        },
      ];
  },
};

export default nextConfig;
