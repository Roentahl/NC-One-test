import { Alert, Box, CircularProgress, Container, Grid } from "@mui/material";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid } from "react-window";
import ProductCard from "./ProductCard";
import { actions, useProducts, useProductsError, useProductsLoading } from "../store/store";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const CARD_WIDTH = 290;
const CARD_HEIGHT = 420;
const COLUMN_COUNT = 4;

export default function ProductList() {

  const products = useProducts();
  const isLoading = useProductsLoading();
  const error = useProductsError();

  useEffect(() => {
    actions.getProducts();
  }, []);

  const rowCount = Math.ceil(products.length / COLUMN_COUNT);

  const Cell = ({ columnIndex, rowIndex, style }: { columnIndex: number; rowIndex: number; style: React.CSSProperties }) => {

    const index = rowIndex * COLUMN_COUNT + columnIndex;
    if (index >= products.length) return null;

    return (
    <div style={style}>
      <Box className="product-item">
        <Link to={`/product/${products[index].id}`} style={{ textDecoration: 'none' }}>
          <ProductCard id={products[index].id} name={products[index].name} price={products[index].price} src={products[index].src} onFavoriteToggle={actions.toggleFavorite} isFavorite={products[index].isFavorite} /> 
        </Link>
      </Box>
    </div>
  )};

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Grid className="products-container">
      <AutoSizer>
        {({ height, width}) => (
          <FixedSizeGrid
            columnCount={COLUMN_COUNT}
            columnWidth={CARD_WIDTH}
            height={height}
            rowCount={rowCount}
            rowHeight={CARD_HEIGHT}
            width={width}
          >
            {Cell}
          </FixedSizeGrid>
        )}
      </AutoSizer>
    </Grid>
  )
}