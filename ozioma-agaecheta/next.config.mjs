/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react", "@chakra-ui/icons"],
    },
};

export default nextConfig;
