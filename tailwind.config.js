module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src directory
    ],
    theme: {
      
      screens: {
        'between': {'min':'220px' , 'max':'420px'},
        'medium': {'min':'420px' , 'max':'730px'},
      },
    },
    plugins: [],
  };