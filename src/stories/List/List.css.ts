// OrderedList.css.ts
import { style } from '@vanilla-extract/css';

export const ol = style({
  paddingLeft: '20px',
  lineHeight: '1.6',
  fontSize: '16px',
  color: '#333',
  listStyleType: 'decimal',
});

export const li = style({
  marginBottom: '4px',
  selectors: {
    '&:hover': {
      color: '#0070f3',
      textDecoration: 'underline',
    },
  },
});
