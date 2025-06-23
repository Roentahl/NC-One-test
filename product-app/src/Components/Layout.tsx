import { Container, Grid } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import FavoriteList from "./FavoriteList";

export default function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" className="container">
        <Grid container className='page-content' sx={{ flexWrap: 'nowrap', gap: '85px' }}>
          <Grid className='favorite-box'>
            <FavoriteList />
          </Grid>
          <Grid className='product-box'>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}