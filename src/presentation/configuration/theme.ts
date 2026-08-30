/**
 * Brand design tokens. Keep _brand-tokens.scss in sync with these values.
 */
export const brandColors = {
  mustard: '#C58A21',
  green: '#1B503C',
  greenDeep: '#012C01',
  cream: '#FEFBFA',
  ink: '#1C1C1C',
  muted: '#5F615E',
  white: '#FFFFFF',
  gold: '#C58A21',
  goldBtn: '#C58A21',
  orange: '#C58A21',
  line: '#DDD2C0',
  outlineBorder: '#D4D0C6',
} as const;

export const brandFonts = {
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
  script: "'Great Vibes', cursive",
  hand: "'Caveat', cursive",
} as const;

export const greenPalette = {
  50: '#E8F0EC',
  100: '#D1DDD6',
  200: '#A3BFB2',
  300: '#6A917F',
  400: '#3D6B59',
  500: brandColors.green,
  600: '#164434',
  700: '#10382C',
  800: '#0A2E22',
  900: '#052418',
  950: brandColors.greenDeep,
} as const;

export const creamPalette = {
  50: brandColors.cream,
  100: '#EBDEC9',
  200: '#DFD0B8',
  300: '#D3C2A5',
  400: '#C7B492',
  500: '#BBA67F',
  600: '#9A8868',
  700: '#796A52',
  800: '#584C3C',
  900: '#372E26',
  950: '#1C1713',
} as const;

export const mustardPalette = {
  50: '#FBF3E6',
  100: '#F5E4C7',
  200: '#EBCA8F',
  300: '#E1B057',
  400: '#D39A33',
  500: brandColors.mustard,
  600: '#A06E1A',
  700: '#785214',
  800: '#50370D',
  900: '#281B07',
  950: '#140E03',
} as const;

export const cssVariables = {
  '--color-mustard': brandColors.mustard,
  '--color-green': brandColors.green,
  '--color-green-deep': brandColors.greenDeep,
  '--color-cream': brandColors.cream,
  '--color-ink': brandColors.ink,
  '--color-muted': brandColors.muted,
  '--color-gold': brandColors.gold,
  '--color-gold-btn': brandColors.goldBtn,
  '--color-orange': brandColors.orange,
  '--color-line': brandColors.line,
  '--color-outline-border': brandColors.outlineBorder,
  '--font-serif': brandFonts.serif,
  '--font-sans': brandFonts.sans,
  '--font-script': brandFonts.script,
  '--font-hand': brandFonts.hand,
  '--green': brandColors.green,
  '--green-deep': brandColors.greenDeep,
  '--cream': brandColors.cream,
  '--ink': brandColors.ink,
  '--muted': brandColors.muted,
  '--gold': brandColors.gold,
  '--gold-btn': brandColors.goldBtn,
  '--orange': brandColors.orange,
  '--line': brandColors.line,
  '--serif': brandFonts.serif,
  '--sans': brandFonts.sans,
  '--script': brandFonts.script,
  '--hand': brandFonts.hand,
} as const;

/**
 * PrimeNG preset config. Wire with definePreset(Aura, weeCardTheme) when @primeng/themes is installed.
 */
export const weeCardTheme = {
  components: {
    button: {
      colorScheme: {
        light: {
          outlined: {
            secondary: {
              borderColor: '{surface.200}',
            },
          },
        },
      },
    },
  },
  semantic: {
    primary: greenPalette,
    colorScheme: {
      light: {
        content: {
          borderColor: '{surface.200}',
        },
        formField: {
          borderColor: '{surface.200}',
          hoverBorderColor: '{surface.300}',
          placeholderColor: '{surface.400}',
          color: '{surface.700}',
        },
        surface: creamPalette,
        primary: {
          color: '{primary.contrast.color}',
          contrastColor: brandColors.white,
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: mustardPalette[100],
          focusBackground: mustardPalette[200],
          color: mustardPalette[800],
          focusColor: mustardPalette[900],
        },
      },
    },
  },
} as const;

export default weeCardTheme;
