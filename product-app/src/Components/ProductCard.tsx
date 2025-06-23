import { Favorite } from "@mui/icons-material";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";

interface IProductCardProps {
  id: number;
  name: string;
  price: number;
  src: string;
  isFavorite: boolean;
  onFavoriteToggle: (id: number) => void;
  horizontal?: boolean;
}

export default function ProductCard({ id, name, price, src, onFavoriteToggle, isFavorite, horizontal }: IProductCardProps) {
  return (
    <Card className={`product-card ${horizontal ? 'horizontal' : ''}`} sx={{ borderRadius: '16px' }}>
      <Box className='card-img-wrapper'>
        <CardMedia
          component="img"
          image={`https://testbackend.nc-one.com${src}`}
          alt={name}
          className="card-img"
        />
      </Box>
      <Box className='card-content'>
        <Typography className='card-title'>
          {name}
        </Typography>
        <Box className='card-footer'>
          <Typography className='card-price'>
            $ {price}
          </Typography>
          <IconButton className={`card-btn ${isFavorite ? 'favorite' : ''}`} onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFavoriteToggle(id);
            }}>
            <Favorite />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}