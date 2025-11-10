export const colors = {
  primary: {
    DEFAULT: '#4A90A4',
    light: '#87CEEB',
    dark: '#2C5F6F',
  },
  secondary: {
    DEFAULT: '#7CB342',
    light: '#AED581',
    dark: '#558B2F',
  },
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    gray: '#6C757D',
    darkGray: '#343A40',
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
