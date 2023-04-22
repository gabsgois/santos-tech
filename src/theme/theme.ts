import { css } from 'styled-components';

export default {
  breakpoints: {
    mobile: {
      number: 375,
      px: '375px',
    },
    desktop: {
      number: 1365,
      px: '1365px',
    },
  },
  fontFamily: ['Work Sans, Urbanist'],
  colors: {
    white: '#ffffff',
    green: {
      main: '#354739',
      dark: '#223727',
    },

    gray: {
      light: '#F2F2F2',
      dark: '#B3B3B3',
    },
    black: '#282828',
    ebony: '#0A0A19',
    mineShaft: '#3D3D3D',
    select: '#E6E5E6',
    yellow: '#F6B446',
    purple: '#38303B',
    divider: '#EBEAE3',
    blue: '#252244',
    feedback: {
      error: '#CA0000',
      success: '#41CA00',
      warning: '#ffc107',
      disabled: '#b8b8b8',
    },
  },
  typography: {
    body: css`
      font-family: 'Work Sans';
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 25px;
    `,
    bodyNav: css`
      font-family: 'Work Sans';
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 27px;
    `,
    spanSmall: css`
      font-family: 'Work Sans';
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 25px;
      text-transform: uppercase;
    `,
    button: css`
      font-family: 'Work Sans';
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 26px;
    `,

    h1Desktop: css`
      font-family: 'Urbanist';
      font-size: 46px;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 60px;
    `,

    h2Desktop: css`
      font-family: 'Urbanist';
      font-size: 42px;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 56px;
    `,

    h3Desktop: css`
      font-family: 'Urbanist';
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0.02em;
      line-height: 42px;
    `,

    h4Desktop: css`
      font-family: 'Urbanist';
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.02em;
      line-height: 32px;
    `,

    h5Desktop: css`
      font-family: 'Urbanist';
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.02em;
      line-height: 30px;
    `,

    h1Mobile: css`
      font-family: 'Urbanist';
      font-size: 40px;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 54px;
    `,

    h2Mobile: css`
      font-family: 'Urbanist';
      font-size: 36px;
      font-weight: 400;
      letter-spacing: 0.02em;
      line-height: 50px;
    `,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64, 96],
};
