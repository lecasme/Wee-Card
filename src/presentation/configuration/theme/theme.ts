import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const weeCardTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e8f0ec',
      100: '#d1ddd6',
      200: '#a3bfb2',
      300: '#6a917f',
      400: '#3d6b59',
      500: '#1b503c',
      600: '#164434',
      700: '#10382c',
      800: '#0a2e22',
      900: '#052418',
      950: '#012c01',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#fefbfa',
          50: '#fefbfa',
          100: '#f5efe6',
          200: '#ebe3d6',
          300: '#ddd2c0',
          400: '#c7b492',
          500: '#9a8868',
          600: '#796a52',
          700: '#584c3c',
          800: '#372e26',
          900: '#1c1713',
          950: '#0f0d0b',
        },
        primary: {
          color: '#ffffff',
          contrastColor: '#ffffff',
          hoverColor: '#164434',
          activeColor: '#10382c',
        },
        highlight: {
          background: '#f5e4c7',
          focusBackground: '#ebca8f',
          color: '#785214',
          focusColor: '#50370d',
        },
      },
    },
  },
});

export default weeCardTheme;
