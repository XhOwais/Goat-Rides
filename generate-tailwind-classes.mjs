import { writeFileSync } from 'fs';

const baseValue = 2; // Starting value in pixels
const maxValue = 1000; // Maximum value in pixels
const increment = 1; // Increment value

const generateClasses = () => {
  const classes = {};
  for (let value = baseValue; value <= maxValue; value += increment) {
    classes[value] = `${value}px`;
  }
  return classes;
};

const widthClasses = generateClasses();
const heightClasses = generateClasses();
const marginClasses = generateClasses();
const paddingClasses = generateClasses();
const minFontSize = 6;
const maxFontSize = 200;
const fontSizeIncrement = 2;
const fontSizes = generateClasses(minFontSize, maxFontSize, fontSizeIncrement);

const bgColors = {
  bg: '#D9D9D9',
  section: '#F9F9F9',
  first: '#C04747',
  second: '#F96666',
  heading: '#363636',
  text: '#7A7A7A',
  // ... add more colors as needed
};

const fontFamilies = {
  body: ['Ubuntu', 'Open-sans'], // Use your local font's name here
  heading: ['Modern', 'sans-serif'], // Add the Ubuntu font
  name: ['Modernone', 'Modernone'],
  sub: ['Bebase', 'Bebase'],
};

const textColors = {
  section: '#D9D9D9',
  heading: '#363636',
  sub: '#7A7A7A',
  body: '#756B6B',
  text: '#F8F8F8',
  hover: '#C04747',
  // ... add more colors as needed
};

const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'Pc': { min: '1920px', max: '2500px' },
        'Desktop': { min: '1280px', max: '1920px' },
        'laptop': { min: '960px', max: '1280px' },
        'tab': { min: '960px', max: '1280px' },
        'mobile': { min: '450px', max: '960px' },
        'smallmobile': { min: '250px', max: '550px' },
        'header': {min: '150px', max: '1280px'},
        'smallheader': {min: '150px', max: '600x'},
        'headertarget': {min: '1279px', max: '2800px'},
        'bugFix1000': {min: '960px', max: '1000px'},
        'hero': {min: '1280px', max: '1600px'},
      },
      width: widthClasses,
      height: heightClasses,
      margin: marginClasses,
      padding: paddingClasses,
      backgroundColor: bgColors,
      fontFamily: fontFamilies,
      fontSize: fontSizes,
      textColor: textColors, // Add the text color configuration
    },
  },
  variants: {},
  plugins: [],
};

writeFileSync(
  './tailwind.config.js',
  `/** @type {import('tailwindcss').Config} */\nexport default ${JSON.stringify(tailwindConfig, null, 2)};\n`
);

console.log('Tailwind CSS utility classes generated up to 600px.');