import { Favorite } from "@mui/icons-material";
import { Alert, Box, CircularProgress, Container, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { actions, useProduct, useProductsError, useProductsLoading } from "../store/store";
import { useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';

export default function ProductDetails() {

  const { id } = useParams();

  const product = useProduct(Number(id));
  const isLoading = useProductsLoading();
  const error = useProductsError();

  useEffect(() => {
    if (!product) {
      actions.getProductById(Number(id));
    }
  }, [id, product]);

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
    <Box className='product-details-container'>
      <Box className='product-details-img-container'>
        <ReactImageMagnify
          smallImage={{ alt: product?.name, src: `https://testbackend.nc-one.com${product?.src}`, isFluidWidth: true }}
          largeImage={{ src: `https://testbackend.nc-one.com${product?.src}`, width: 1200, height: 1200 }}
          enlargedImagePosition="over"
        />
      </Box>

      <Box className='product-info'>
        <Typography className="product-name">
          {product?.name}
        </Typography>
        <Box className='product-footer'>
          <Typography className="product-price">
            $ {product?.price}
          </Typography>
          <IconButton className={`like-btn ${product?.isFavorite ? 'favorite' : ''}`} onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              actions.toggleFavorite(Number(product?.id));
            }}>
            <Favorite className="like-btn-svg" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}