import { style, styleVariants } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100dvh',
  padding: 0,
  margin: 0,
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
  '::backdrop': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});

export const modalSize = styleVariants({
  L: {
    width: 882,
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: 12,
    '@media': {
      'screen and (max-width: 900px)': {
        width: 700, // ← 急にカクッと狭くする
      },
      'screen and (max-width: 600px)': {
        width: 480,
      },
    },
  },
  M: {
    // width: 'min(90vw, 580px)',
    width: 580,
    padding: '32px',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  S: {
    // width: 'min(90vw, 320px)',
    width: 320,
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});

export const closeButton = style({
  position: 'absolute',
  top: 12,
  right: 12,
  background: 'transparent',
  border: 'none',
  fontSize: 24,
  cursor: 'pointer',
});
