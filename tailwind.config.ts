import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {
        // spacingUnit: 4,
        // disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        // dividerWeight: '1px', // h-divider the default height applied to the divider component
        // fontSize: {
        //   tiny: '0.75rem', // text-tiny
        //   small: '0.875rem', // text-small
        //   medium: '1rem', // text-medium
        //   large: '1.125rem' // text-large
        // },
        // lineHeight: {
        //   tiny: '1rem', // text-tiny
        //   small: '1.25rem', // text-small
        //   medium: '1.5rem', // text-medium
        //   large: '1.75rem' // text-large
        // },
        // radius: {
        //   small: '8px', // rounded-small
        //   medium: '12px', // rounded-medium
        //   large: '14px' // rounded-large
        // },
        // borderWidth: {
        //   small: '1px', // border-small
        //   medium: '2px', // border-medium (default)
        //   large: '3px' // border-large
        // }
      },
      themes: {
        // light: {
        //   layout: {}, // light theme layout tokens
        //   colors: {} // light theme colors
        // },
        // dark: {
        //   layout: {}, // dark theme layout tokens
        //   colors: {} // dark theme colors
        // }
      }
    })
  ]
};
export default config;
