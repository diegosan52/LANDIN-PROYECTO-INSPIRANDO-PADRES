/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#004d4d',
                    yellow: '#fdd23f',
                    mint: '#64bd9c',
                    pink: '#fc8ecf',
                    lime: '#9edb7d',
                }
            },
            fontFamily: {
                quicksand: ['Quicksand', 'sans-serif'],
                lilita: ['Lilita One', 'cursive'],
            }
        },
    },
    plugins: [],
}
