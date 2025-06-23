import { createTheme, CssBaseline, ThemeProvider, type Shadows } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Layout from "./Components/Layout";
import ProductDetails from "./Components/ProductDetails";
import Poppins from '../src/assets/fonts/Poppins-Regular.woff2';
import Anek from '../src/assets/fonts/AnekTelugu-Medium.woff2';

const theme = createTheme({
  palette: {
    primary: {main: '#ffcc26'},
  },
  shadows: Array(25).fill("none") as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1720,
    }
  },
  typography: {
    fontFamily: 'Poppins, Anek, sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${Poppins}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'Anek';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${Anek}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  }
})

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}