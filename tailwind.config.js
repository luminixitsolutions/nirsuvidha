/** @type {import('tailwindcss').Config} */
module.exports = {
  /* Scope utilities so Bootstrap global styles do not win over Tailwind; wrap app in #nri-app */
  important: '#nri-app',
  content: [
    './src/app/admin/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/admin/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/help/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f4f4f5', /* zinc-100 */
        },
        brand: {
          gold: '#C9A34E',
          'gold-dark': '#9A7B32',
        },
        nri: {
          cream: '#fdfbf7',
          'cream-deep': '#f8f2ee',
          gold: '#c5a059',
        },
      },
      backgroundImage: {
        /* Subtle cool wash for icon accents; main shell uses solid bg-white */
        'admin-gold-fade':
          'linear-gradient(135deg, rgba(201, 163, 78, 0.1) 0%, rgba(201, 163, 78, 0) 55%)',
        'glass-shine': 'linear-gradient(125deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'press': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
        },
        'shimmer-line': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'help-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'message-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'press': 'press 0.2s ease-out',
        'shimmer-line': 'shimmer-line 2.5s ease-in-out infinite',
        'help-float': 'help-float 4.5s ease-in-out infinite',
        'message-in': 'message-in 0.35s ease-out both',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.08)',
        glass: '0 1px 3px rgba(15, 23, 42, 0.06), 0 4px 20px rgba(15, 23, 42, 0.04)',
        'glass-sm': '0 1px 2px rgba(15, 23, 42, 0.05)',
        stat: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.05)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
