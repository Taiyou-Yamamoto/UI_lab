import { style, styleVariants } from '@vanilla-extract/css';

export const container = styleVariants({
  information: {
    border: '1px solid #0070f3',
    backgroundColor: '#e6f0ff',
    padding: '16px',
    borderRadius: '8px',
  },
  warning: {
    border: '1px solid #f5a623',
    backgroundColor: '#fff8e1',
    padding: '16px',
    borderRadius: '8px',
  },
  danger: {
    border: '1px solid #ff4d4f',
    backgroundColor: '#fff1f0',
    padding: '16px',
    borderRadius: '8px',
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
});

export const titleWithIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
});

export const icon = style({
  fontSize: '18px',
});

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  background: 'transparent',
  border: 'none',
  color: '#666',
  cursor: 'pointer',
  fontSize: '14px',
});

export const closeText = style({
  fontSize: '14px',
});

export const description = style({
  marginTop: '8px',
  color: '#444',
  fontSize: '14px',
});

export const linkWrapper = style({
  marginTop: '8px',
});

export const linkText = style({
  color: '#0070f3',
  textDecoration: 'underline',
  fontSize: '14px',
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '8px',
  marginTop: '12px',
});

export const button = style({
  padding: '8px 16px',
  fontSize: '14px',
  borderRadius: '4px',
  cursor: 'pointer',
  border: 'none',
});

export const buttonType = styleVariants({
  primary: {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    backgroundColor: '#eaeaea',
    color: '#000',
    border: 'none',
  },
  tertiary: {
    backgroundColor: 'transparent',
    color: '#0070f3',
    border: '1px solid #0070f3',
  },
});
