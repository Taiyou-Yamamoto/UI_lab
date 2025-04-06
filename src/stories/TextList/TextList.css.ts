import { style, styleVariants } from '@vanilla-extract/css';

// コンテナ（階層別）
export const parentContainer = style({
  display: 'grid',
  boxSizing: 'border-box',
  gap: '8px',
  lineHeight: '1.6',
});

export const childContainer = style({
  display: 'grid',
  boxSizing: 'border-box',
  gap: '4px',
  paddingTop: '4px',
  paddingLeft: '24px',
});

export const grandChildContainer = style({
  display: 'grid',
  boxSizing: 'border-box',
  gap: '4px',
  paddingTop: '4px',
  paddingLeft: '48px',
});

export const parentListContainer = style({
  paddingBottom: '4px',
});

// リストマーカー（ul）
export const listStyle = styleVariants({
  decimal: {
    display: 'inline-block',
    paddingLeft: '26px',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: '10px',
      left: '10px',
      minWidth: '4px',
      minHeight: '4px',
      maxWidth: '4px',
      maxHeight: '4px',
      backgroundColor: 'black',
      borderRadius: '50%',
    },
    selectors: {
      'html.dark &::before': {
        backgroundColor: '#ddd',
      },
    },
  },
  circle: {
    display: 'inline-block',
    paddingLeft: '26px',
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      top: '10px',
      left: '10px',
      minWidth: '3px',
      minHeight: '3px',
      maxWidth: '3px',
      maxHeight: '3px',
      border: '1px solid black',
      borderRadius: '50%',
      backgroundColor: 'transparent',
    },
    selectors: {
      'html.dark &::before': {
        borderColor: '#ddd',
      },
    },
  },
  square: {
    display: 'inline-block',
    paddingLeft: '26px',
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      top: '10px',
      left: '10px',
      minWidth: '4px',
      minHeight: '4px',
      maxWidth: '4px',
      maxHeight: '4px',
      backgroundColor: 'black',
    },
    selectors: {
      'html.dark &::before': {
        backgroundColor: '#ddd',
      },
    },
  },
});

// テキストと装飾
export const text = style({
  display: 'flex',
  fontSize: '16px',
  color: '#333',
  selectors: {
    'html.dark &': {
      color: '#ddd',
    },
  },
});

export const underline = style({
  display: 'flex',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const parent = style({});

export const child = style({
  selectors: {
    [`${parent}:hover &`]: {
      textDecoration: 'underline',
    },
  },
});

// 番号のテキスト部分（親・子・孫）
export const underlineNone = styleVariants({
  parent: {
    marginRight: '4px',
    textDecoration: 'none !important',
    ':hover': {
      textDecoration: 'none !important',
    },
  },
  child: {
    marginRight: '4px',
    minWidth: '31.52px',
    textDecoration: 'none !important',
    ':hover': {
      textDecoration: 'none !important',
    },
  },
  grandChild: {
    marginRight: '4px',
    minWidth: '48.25px',
    textDecoration: 'none !important',
  },
});

// マージン調整（番号用）
export const marginRight = styleVariants({
  parent: {
    display: 'inline-block',
    marginRight: '4px',
  },
  child: {
    display: 'block',
    marginRight: '4px',
    // minWidth: '31.52px',
  },
  grandChild: {
    display: 'block',
    marginRight: '4px',
    // minWidth: '48.25px',
  },
});
