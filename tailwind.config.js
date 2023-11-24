/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblueelements: "hsl(209, 23%, 22%)",
        darkbg: "hsl(207, 26%, 17%)",
        darkblue: "hsl(200, 15%, 8%)",
        darkgray: "hsl(0, 0%, 52%)",
        lightbg: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};

/* 
- darkblue (Dark Mode Elements): hsl(209, 23%, 22%)
- darkbg (Dark Mode Background): hsl(207, 26%, 17%)
- darkblue (Light Mode Text): hsl(200, 15%, 8%)
- darkgray (Light Mode Input): hsl(0, 0%, 52%)
- lightbg (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
 */
