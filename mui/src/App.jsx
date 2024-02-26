import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { SignIn, SignInSide } from "./templates";

function App() {
  return (
    <>
      {/* <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant="h2" align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align='center' color='textSecondary' paragraph>
              Hello There this random text Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque cum voluptate a rerum, incidunt fuga dignissimos adipisci porro molestias?
            </Typography>

            <div>
              <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant="contained" color="primary">
                        See my Photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined"  color="primary">
                        Secondary Button
                    </Button>
                  </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main> */}

      {/* <SignIn/> */}

      
        <SignInSide />
      
    </>
  );
}

export default App;
