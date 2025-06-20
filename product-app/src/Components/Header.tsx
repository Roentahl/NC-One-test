import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  const getPageTitle = () => {
    if (location.pathname.startsWith('/product/')) {
      return 'Product Page';
    }
    return 'Product List Page';
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          {getPageTitle()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}