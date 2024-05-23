import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      // 何度も使用する色等を定義する
      tokens: {
        colors: {
          themePrimary: { value: "#000066" },
          themePrimaryPale: { value: "#283296" },
          themePrimaryAccent: { value: "#5096C8" },

          textPrimary: { value: "#333333" },
          textSecondary: { value: "#4C505B" },
          textTertiary: { value: "#6F7380" },
          textWQuateranary: { value: "#868B9A" },
          textPale: { value: "#A3A5AB" },

          shadeOver: { value: "#000000 40%" },

          systemPrimary: { value: "#000000" },

          baseBright: { value: "#FFFFFF" },
          baseBackground: { value: "#F0F2F7" },
          baseHairline: { value: "#E2E4EA" },
          baseAccent: { value: "#515186" },
          baseApproved: { value: "#329664" },
          baseAttention: { value: "#E1462D" },
          baseAttentionPale: { value: "#FFF4F2" },
          baseError: { value: "#CD1400" },
          baseSelected: { value: "#EEF5FA" },
          baseDisabled: { value: "#F2F4F8" },
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
