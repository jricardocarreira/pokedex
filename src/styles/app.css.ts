import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
  fontFamily: "Play",
  listStyle: "none",
  textDecoration: "none",
});

globalStyle('#app', {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
})