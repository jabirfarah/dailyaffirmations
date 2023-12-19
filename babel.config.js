<<<<<<< HEAD
process.env.TAMAGUI_TARGET = "native"; // Don't forget to specify your TAMAGUI_TARGET here

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "transform-inline-environment-variables",
        // NOTE: include is optional, you can leave this part out
        {
          include: ["TAMAGUI_TARGET", "EXPO_ROUTER_APP_ROOT"]
        }
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true
        }
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel")
    ]
=======
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
>>>>>>> 619ffba9511cf677e5853ca818877d2a531f97a1
  };
};
