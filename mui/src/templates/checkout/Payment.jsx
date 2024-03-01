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
import Checkbox from "@mui/material/Checkbox";
function Payment() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", gap: 2, color: "white" }}
    >
      <Typography variant="h6">Payment Method</Typography>

      <Grid color={"white"} sx={{ color: "white" }} container spacing={3}>
        {/* card name */}
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on Card"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            focused
          />
        </Grid>

        {/* card  no */}
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="cardNo"
            name="cardNo"
            label="Card Number"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            focused
          />
        </Grid>

        {/* Expiry Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Expiry Date"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            variant="standard"
            focused
          />
        </Grid>

        {/* cvv */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="CVV"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            variant="standard"
            focused
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "white" }}
                name="saveAddress"
                value="yes"
              />
            }
            label="Remember Credit Card Details for next time"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Payment;
