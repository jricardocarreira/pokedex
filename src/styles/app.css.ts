import { globalStyle } from '@vanilla-extract/css';
import { themes } from './themes/contract.css';

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
  alignItems: "center",
  minHeight: "100vh"
})

globalStyle('body', {
  backgroundColor: themes.background
})