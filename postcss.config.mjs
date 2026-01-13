const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        './src/app/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
      ],
    },
  },
};

export default config;
