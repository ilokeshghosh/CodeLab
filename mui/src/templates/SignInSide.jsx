import React from "react";
import {
  Container,
  Grid,
  Paper,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CodeIcon from "@mui/icons-material/Code";

function SignInSide() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        item
        xs={false}
        sm={4}
        md={7}
      />

      <Grid item xs={12} sm={8} md={5}>
        <Container
          sx={{
            width: "100%",
            my: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* icons/title section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LockOutlinedIcon
              sx={{
                backgroundColor: "#bd2fd6",
                color: "white",
                borderRadius: "100%",
                padding: "5px",
              }}
            />
            <Typography variant="h5">Sign in</Typography>
          </Box>

          {/* inputfields section */}
          <Container
            maxWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              sx={{ width: "80%" }}
              type="email"
              label="Email"
              required
            />
            <TextField
              sx={{ width: "80%" }}
              type="password"
              label="Password"
              required
            />
            <Box sx={{ width: "80%" }}>
              <Checkbox />
              <Typography variant="para">Remember Me</Typography>
            </Box>
            <Button sx={{ width: "80%" }} variant="contained">
              SIGN IN
            </Button>

            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link sx={{ cursor: "pointer" }}>
                <Typography variant="para">Forget password?</Typography>
              </Link>
              <Link sx={{ cursor: "pointer" }}>
                <Typography variant="para">
                  Don't have an account?Sign Up
                </Typography>
              </Link>
            </Box>
          </Container>

          <Link
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
              color: "grey",
              cursor: "pointer",
            }}
            href="#"
          >
            <CodeIcon />
            <Typography sx={{ textAlign: "center" }}>Source Code</Typography>
          </Link>
        </Container>
      </Grid>
    </Grid>
  );
}

export default SignInSide;
