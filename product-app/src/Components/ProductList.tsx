import { Box, Grid } from "@mui/material";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid } from "react-window";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const Cell = ({ columnIndex, rowIndex, style }: { columnIndex: number; rowIndex: number; style: React.CSSProperties }) => {

    return (
    <div style={style}>
      <Box className="product-item">
        <ProductCard /> 
      </Box>
    </div>
  )};

  return (
    <Grid>
      <Box>
        <AutoSizer>
          {({ height, width}) => {
            <FixedSizeGrid
              columnCount={4}
              columnWidth={260}
              height={height}
              rowCount={20}
              rowHeight={350}
              width={width}
            >
              {Cell}
            </FixedSizeGrid>
          }}
        </AutoSizer>
      </Box>
    </Grid>
  )
}