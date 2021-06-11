import '../src/index.css';
import theme  from './theme'

const customViewports = {
  sm: {
    name: 'sm (iphone 11)',
    styles: {
      width: '414px',
      height: '896px'
    },
  },
  md: {
    name: 'md (ipad mini)',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  lg: {
    name: 'lg (ipad pro 12)',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  xl: {
    name: 'xl | desktop',
    styles: {
      width: '1440px',
      height: '1024',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: theme
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  }
}

