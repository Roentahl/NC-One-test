import { createTheme, CssBaseline, ThemeProvider, type Shadows } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Layout from "./Components/Layout";
import ProductDetails from "./Components/ProductDetails";

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