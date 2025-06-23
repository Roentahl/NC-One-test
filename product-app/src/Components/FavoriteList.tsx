import { Box, List, ListItem, Typography } from "@mui/material";
import { actions, useFavoriteProducts } from "../store/store";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function FavoriteList() {
  const favoriteProducts = useFavoriteProducts();

  return (
    <Box className='favorite-container'>
      <Typography variant="h5" component="div" className="favorite-title">
        Favorites
      </Typography>
      <Box className="favorite-list-wrapper">
        <List className="favorite-list">
          {favoriteProducts.length > 0 && (
            favoriteProducts.map(product => (
              <ListItem className="favorite-list-item" key={product.id}>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <ProductCard 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    src={product.src}
                    onFavoriteToggle={actions.toggleFavorite}
                    isFavorite={product.isFavorite}
                    horizontal
                  />
                </Link>
              </ListItem>
            ))
          )}
        </List>
      </Box>  
    </Box>
  )
}