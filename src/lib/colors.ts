export const colors = {
  primary: {
    DEFAULT: '#4A90A4',
    light: '#7BB3C0',
    dark: '#2C5F6F',
  },
  secondary: {
    DEFAULT: '#8FBC8F',
    light: '#B8D4B8',
    dark: '#5F8A5F',
  },
  accent: {
    DEFAULT: '#87CEEB',
    light: '#B8E0F5',
    dark: '#4682B4',
  },
  nature: {
    DEFAULT: '#9ACD32',
    light: '#C1E055',
    dark: '#6B8E23',
  },
  neutral: {
    white: '#FFFFFF',
    lightest: '#F8F9FA',
    light: '#E9ECEF',
    gray: '#6C757D',
    dark: '#495057',
    darkest: '#212529',
    black: '#000000',
  },
} as const;

export function getColor(colorPath: string): string {
  const parts = colorPath.split('.');
  let value: any = colors;

  for (const part of parts) {
    value = value[part];
  }

  return typeof value === 'string' ? value : value.DEFAULT;
}

// Helper function to get complementary colors
export function getColorPalette(baseColor: keyof typeof colors) {
  return colors[baseColor];
}

// Gradient combinations that work well together
export const gradientCombinations = {
  nature: ['nature.light', 'secondary.DEFAULT'],
  ocean: ['accent.light', 'primary.DEFAULT'],
  sage: ['secondary.light', 'secondary.dark'],
  sky: ['accent.light', 'accent.dark'],
  forest: ['nature.dark', 'secondary.dark'],
} as const;
