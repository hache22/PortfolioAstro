/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient-xy': 'gradient-xy 15s ease infinite',
                'float': 'float 20s infinite cubic-bezier(0.4, 0, 0.2, 1)',
                'mesh-move': 'mesh-move 20s linear infinite',
                'glow': 'glow 8s ease-in-out infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%, 100%': {
                        transform: 'scale(1) translate3d(0, 0, 0)',
                        opacity: '0.3',
                    },
                    '50%': {
                        transform: 'scale(1.1) translate3d(0, 0, 0)',
                        opacity: '0.5',
                    },
                },
                'gradient-xy': {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translate3d(0, 0, 0) rotate(0deg)',
                        opacity: '0',
                    },
                    '10%, 90%': {
                        opacity: '0.5',
                    },
                    '50%': {
                        transform: 'translate3d(100px, 100px, 50px) rotate(5deg)',
                    },
                },
                'mesh-move': {
                    '0%': {
                        'background-position': '0 0',
                    },
                    '100%': {
                        'background-position': '50px 50px',
                    },
                },
                'glow': {
                    '0%, 100%': {
                        opacity: '0.3',
                        transform: 'scale(1)',
                    },
                    '50%': {
                        opacity: '0.5',
                        transform: 'scale(1.2)',
                    },
                },
            },
        },
    },
    plugins: [],
} 