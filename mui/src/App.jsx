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
  CardActionArea,
  Box,
  Link,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import PreviewIcon from "@mui/icons-material/Preview";
import { Blog, SignIn, SignInSide, Signup, Checkout } from "./templates";

function App() {
  return (
    <>
      <CssBaseline />

      <Container
        sx={{
          height: {
            md: "100vh",
          },
          backgroundColor: "#101418",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
        }}
        maxWidth
        disableGutters
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "70%",
            },
            // overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            py: 1,
            height: "100%",
          }}
        >
          {/* Sign-in */}
          <Card
            sx={{
              width: 345,
              backgroundColor: "#293743",
              color: "white",
              border: "1px solid grey",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://ik.imagekit.io/8fgpvoiai/project-image/mui/signin_XxlM6poXOj.png?updatedAt=1709365632314"
                alt="green iguana"
              />

              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Sign In
                  </Typography>
                  <Link href="/signin">
                    <PreviewIcon />
                  </Link>
                </Box>
                <Typography variant="body2" color="">
                  A simple sign-in page using text fields, buttons, checkboxes,
                  links, and more.
                </Typography>
                <Link
                  href="https://github.com/ilokeshghosh/CodeLab/blob/main/mui/src/templates/SignIn.jsx"
                  variant="outline"
                  sx={{
                    border: "1px solid grey",
                    width: "100%",
                    mt: 1,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                  disableElevation
                >
                  <CodeIcon />
                  <Typography>Source Code</Typography>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* sign-in side */}
          <Card
            sx={{
              width: 345,
              backgroundColor: "#293743",
              color: "white",
              border: "1px solid grey",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://ik.imagekit.io/8fgpvoiai/project-image/mui/signup-side_tIcHho6CaP.png?updatedAt=1709365632630"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Sign-in side
                  </Typography>
                  <Link href="/signin-side">
                    <PreviewIcon />
                  </Link>
                </Box>

                <Typography variant="body2" color="">
                  A simple sign-in page with a two-column layout using text
                  fields, buttons, and more.
                </Typography>
                <Link
                  href="https://github.com/ilokeshghosh/CodeLab/blob/main/mui/src/templates/SignInSide.jsx"
                  variant="outline"
                  sx={{
                    border: "1px solid grey",
                    width: "100%",
                    mt: 1,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                  disableElevation
                >
                  <CodeIcon />
                  <Typography>Source Code</Typography>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* sign-up */}
          <Card
            sx={{
              width: 345,
              backgroundColor: "#293743",
              color: "white",
              border: "1px solid grey",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://ik.imagekit.io/8fgpvoiai/project-image/mui/signup_l3m8Vo-ie.png?updatedAt=1709365632256"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Sign-up
                  </Typography>
                  <Link href="/signup">
                    <PreviewIcon />
                  </Link>
                </Box>

                <Typography variant="body2" color="">
                  A simple sign-up page using text fields, buttons, checkboxes,
                  links, and more.
                </Typography>
                <Link
                  href="https://github.com/ilokeshghosh/CodeLab/blob/main/mui/src/templates/Signup.jsx"
                  variant="outline"
                  sx={{
                    border: "1px solid grey",
                    width: "100%",
                    mt: 1,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                  disableElevation
                >
                  <CodeIcon />
                  <Typography>Source Code</Typography>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Blog */}
          <Card
            sx={{
              width: 345,
              backgroundColor: "#293743",
              color: "white",
              border: "1px solid grey",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://ik.imagekit.io/8fgpvoiai/project-image/mui/blog_9SbD0vIAl6.png?updatedAt=1709365632494"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Blog
                  </Typography>
                  <Link href="/blog">
                    <PreviewIcon />
                  </Link>
                </Box>

                <Typography variant="body2" color="">
                  A sophisticated blog page layout Markdown support is courtesy
                  of markdown-to-jsx.
                </Typography>
                <Link
                  href="https://github.com/ilokeshghosh/CodeLab/blob/main/mui/src/templates/Blog.jsx"
                  variant="outline"
                  sx={{
                    border: "1px solid grey",
                    width: "100%",
                    mt: 1,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                  disableElevation
                >
                  <CodeIcon />
                  <Typography>Source Code</Typography>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* checkout */}
          <Card
            sx={{
              width: 345,
              backgroundColor: "#293743",
              color: "white",
              border: "1px solid grey",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://ik.imagekit.io/8fgpvoiai/project-image/mui/checkout_vcaLDN9Xx.png?updatedAt=1709365632490"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Checkout
                  </Typography>
                  <Link href="/checkout">
                    <PreviewIcon />
                  </Link>
                </Box>

                <Typography variant="body2" color="">
                  A step-by-step checkout page layout. Adapt the number of steps
                  to suit your needs, or make steps optional.
                </Typography>
                <Link
                  href="https://github.com/ilokeshghosh/CodeLab/tree/main/mui/src/templates/checkout"
                  variant="outline"
                  sx={{
                    border: "1px solid grey",
                    width: "100%",
                    mt: 1,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                  disableElevation
                >
                  <CodeIcon />
                  <Typography>Source Code</Typography>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default App;
