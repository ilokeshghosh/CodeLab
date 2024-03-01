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

import Checkbox from '@mui/material/Checkbox';
function Shipping() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", gap: 2, color: "white" }}
    >
      <Typography variant="h6">Shipping address</Typography>

      <Grid color={"white"} sx={{ color: "white" }} container spacing={3}>
        {/* first name */}
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
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

        {/* last name */}
        <Grid item sm={6} xs={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
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

        {/* address line 2 */}
        <Grid xs={12} item>
          <TextField
            required
            label="Address line"
            fullWidth
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            variant="standard"
            focused
          />
        </Grid>

        {/* address line 2 */}
        <Grid item xs={12}>
          <TextField
            required
            label="Address Line 2"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            variant="standard"
            fullWidth
            focused
          />
        </Grid>

        {/* city */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="City"
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

        {/* state/province/region */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="State/Province/Region"
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

        {/* Zip/Postal Code */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            focused
            label="Zip/Postal Code"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            variant="standard"
          />
        </Grid>

        {/* country */}
        <Grid item xs={12} sm={6}>
            <TextField
            required
            focused
            InputLabelProps={{
                style:{color:"white"}
            }}
            InputProps={{
                style:{color:'white'}
            }}

            variant="standard"
            label='Country'
            />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          {/* <CheckBox checked={false} />
          <Typography>Use this address for payment details</Typography> */}

          <FormControlLabel
            control={
              <Checkbox sx={{color:'white'}} name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Shipping;
