/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1f2937',
          foreground: '#f3f4f6',
          accent: '#64748b',
          'accent-hover': '#475569',
        },
        light: {
          background: '#f9fafb',
          foreground: '#111827',
          accent: '#e5e7eb',
          'accent-hover': '#d1d5db',
        },
      },
    },
  },
  plugins: [],
}

