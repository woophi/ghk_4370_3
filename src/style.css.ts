import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '2rem',
});

const row = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
});

const rowTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'space-between',
});

export const appSt = {
  bottomBtn,
  container,
  row,
  rowTitle,
};
