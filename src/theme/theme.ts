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
  fontFamily: ['SF Pro Display, Helvetica, Arial, sans-serif'],
  colors: {
    white: '#ffffff',
    golden: '#C4B58F',
    light_golden: '#DCD1BA',
    green: {
      main: '#02645C',
      dark: {
        1: '#31363E',
        2: '#0B392E',
        3: '#041C3E',
      },
    },

    gray: '#7B8893',
    black: '#282828',
    ebony: '#0A0A19',
    mineShaft: '#3D3D3D',
    select: '#E6E5E6',
    brown: '#664A40',
    yellow: '#FFC72C',
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
      font-family: 'SF Pro Display';
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.3px;
      line-height: 26px;
    `,
    big: css`
      font-family: 'SF Pro Display';
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.3px;
      line-height: 18px;
    `,
    button: css`
      font-family: 'SF Pro Display';
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 26px;
    `,
    legend: css`
      font-family: 'SF Pro Display';
      font-size: 13px;
      font-weight: 400;
      line-height: 13px;
    `,
    spanBigDesktop: css`
      font-family: 'Essonnes';
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 30px;
      text-transform: uppercase;
    `,
    spanBigMobile: css`
      font-family: 'Essonnes';
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 34px;
      text-transform: uppercase;
    `,
    h2Desktop: css`
      font-family: 'Essonnes';
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 50px;
    `,
    h2Mobile: css`
      font-family: 'Essonnes';
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 38px;
    `,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64, 96],
};
