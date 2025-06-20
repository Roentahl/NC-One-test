import { Favorite } from "@mui/icons-material";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";

interface IProductCardProps {
  id: number;
  name: string;
  price: number;
  src: string;
  horizontal?: boolean;
}

export default function ProductCard({ id, name, price, src, horizontal }: IProductCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={`https://testbackend.nc-one.com${src}`}
        alt={name}
      />
      <Box>
        <Typography>
          {name}
        </Typography>
        <Box>
          <Typography>
            $ {price}
          </Typography>
          <IconButton>
            <Favorite />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}