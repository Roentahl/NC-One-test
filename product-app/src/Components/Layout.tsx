import { Container, Grid } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Grid container>
          <Grid></Grid>
          <Grid>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}