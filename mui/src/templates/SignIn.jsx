import React from "react";
import {
  Container,
  Typography,
  FormControl,
  TextField,
  Checkbox,
  Box,
  Button,
  Link,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CodeIcon from "@mui/icons-material/Code";

function SignIn() {
  return (
    <Container
      sx={{
        width: "100%",
        // border: "2px solid red",
        height: "10%",
        margin: "100px auto",
      }}
      maxWidth="sm"
    >
      {/* upper section or logo */}
      <Container
        sx={{
          width: "100%",
          // border: "2px solid green",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
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
      </Container>

      {/* lower section / form and links */}
      <Container sx={{ marginY: "20px" }}>
        <FormControl
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <TextField sx={{ width: "70%" }} required label="Email Address" />
          <TextField
            sx={{ width: "70%" }}
            type="password"
            required
            label="Password"
          />
          <Box sx={{ width: "70%" }}>
            <Checkbox />
            <Typography variant="para">Remember Me</Typography>
          </Box>
          <Button sx={{ width: "70%" }} variant="contained">
            SIGN IN
          </Button>
        </FormControl>
        <Container
          sx={{
            width: "70%",
            marginY: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <Link sx={{ cursor: "pointer" }}>
            <Typography variant="para">Forget password?</Typography>
          </Link>
          <Link sx={{ cursor: "pointer" }}>
            <Typography variant="para">
              Don't have an account?Sign Up
            </Typography>
          </Link>
        </Container>
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
  );
}

export default SignIn;
