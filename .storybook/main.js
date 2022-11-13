module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    emotionAlias: false,
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config, { configType }) => {
    // Fixes npm packages that depend on some modules
    config.resolve = {
      extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
      fallback: {
        fs: false,
        path: false,
      },
    };

    // Important: return the modified config
    return config;
  },
};
