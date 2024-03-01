import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CodeIcon from "@mui/icons-material/Code";

function Signup() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", gap: 3, py: 10 }}
      maxWidth="xs"
      disableGutters
    >
      <Box
        sx={{
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
        <Typography variant="h5">Sign Up</Typography>
      </Box>

      <Container
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
        disableGutters
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <TextField label="First Name" required />
          <TextField label="Last Name" required />
        </Box>
        <TextField
          type="text"
          sx={{ width: "100%" }}
          label="Email Address"
          required
        />

        <TextField
          type="password"
          sx={{ width: "100%" }}
          label="Password"
          required
        />

        <Box sx={{ display: "flex" }}>
          <Checkbox />
          <Typography>
            I want to receive inspiration, marketing promotions and updates via
            email.
          </Typography>
        </Box>

        <Button sx={{ width: "100%" }} variant="contained">
          SIGN UP
        </Button>
        <Link sx={{ textAlign: "end", cursor: "pointer" }}>
          Already have an account? Sign in
        </Link>
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

export default Signup;
