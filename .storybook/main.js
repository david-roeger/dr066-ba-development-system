module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    //"@storybook/addon-actions",
    "@storybook/theming",
    "storybook-addon-pseudo-states",
  ],
};
