/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    // Suppress "Critical dependency" warnings from @walletconnect/ox internals
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { module: /node_modules\/ox\/_esm\/tempo/ },
      { module: /node_modules\/@walletconnect/ },
      { module: /node_modules\/@reown/ },
      (warning) =>
        warning.message &&
        warning.message.includes("Critical dependency: the request of a dependency is an expression"),
    ];

    return config;
  },
};

export default nextConfig;
