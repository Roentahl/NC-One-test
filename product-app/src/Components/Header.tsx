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
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Typography variant="h6" component="div" className="title">
          {getPageTitle()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}