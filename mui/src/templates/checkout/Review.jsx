import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  Box,
  TextField,
  FormControlLabel,
} from "@mui/material";
function Review() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", gap: 2, color: "white" }}
    >
      <Typography variant="h6">Order Summary</Typography>

      <Typography>
        Product Details : Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Fuga hic adipisci alias voluptates quam ut dolorem non cumque
        velit cum?
      </Typography>
    </Container>
  );
}

export default Review;
