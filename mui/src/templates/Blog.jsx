import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Divider,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Blog() {
  return (
    <Container maxWidth="lg">
      {/* header */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "2px solid lightgrey",
          pb: 2,
        }}
      >
        <Link>SUBSCRIBE</Link>
        <Typography variant="h4">Blog</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <SearchIcon />
          <Button variant="outlined">SIGN UP</Button>
        </Box>
      </Container>

      {/* hero page */}
      <Container maxWidth disableGutters>
        {/* category section */}
        <Container>
          <List sx={{ display: "flex", overflowX: "auto" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <ListItem key={index}>
                <ListItemText>
                  <Link sx={{ color: "black", cursor: "pointer" }}>
                    item{index}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Container>

        {/* hero image section */}
        <Container
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: 1,
          }}
        >
          <Grid
            container
            sx={{
              color: "white",
              py: 5,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Grid
              sx={{
                textAlign: {
                  xs: "center",
                  md: "start",
                },
              }}
              item
              xs={12}
              md={6}
            >
              <Typography variant="h3">
                Title of a longer Featured blog Post
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what's most interesting in this
                post's contents.
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Link>Continue reading</Link>
            </Grid>
          </Grid>
        </Container>

        {/* post card */}
        <Container sx={{ py: 5, display: "flex", gap: 3 }}>
          <Card sx={{ maxWidth: 545, maxHeight: 300 }}>
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row-reverse",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="green iguana"
                sx={{ objectFit: "cover", objectPosition: "center" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Link>Continue reading</Link>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 545, maxHeight: 300 }}>
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row-reverse",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="green iguana"
                sx={{ objectFit: "cover", objectPosition: "center" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Link>Continue reading</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>

      {/* content page */}
      <Grid container spacing={2}>
        {/* left section */}
        <Grid item md={8} xs={12}>
          <Typography
            variant="h4"
            sx={{
              py: 1,
              textAlign: {
                xs: "center",
                md: "start",
              },
            }}
          >
            From the firehose
          </Typography>
          <Divider />

          <Container disableGutters>
            <Box sx={{ py: 3 }}>
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                }}
                variant="h4"
              >
                Sample blog post
              </Typography>
              <Typography
                sx={{
                  fontStyle: "italic",
                  my: 1,
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                }}
              >
                April 1,2024
              </Typography>
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                }}
              >
                This blog post shows a few different types of content that are
                supported and styled with Material styles. Basic typography,
                images, and code are all supported. You can extend these by
                modifying Markdown.js.
              </Typography>

              <Typography>
                This blog post shows a few different types of content that are
                supported and styled with Material styles. Basic typography,
                images, and code are all supported. You can extend these by
                modifying Markdown.js.
              </Typography>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                }}
                variant="h6"
              >
                Heading
              </Typography>
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A et
                facere ut enim fuga voluptas iste sunt laudantium quo eos. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Neque quas
                cupiditate debitis ipsam soluta accusantium hic ullam, fugiat
                cum quibusdam dolorum doloremque odit, repellat ea ut laboriosam
                aliquid vitae, quisquam exercitationem nam! Suscipit quod facere
                maiores necessitatibus, vero vel tenetur!
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                }}
                variant="h6"
              >
                Heading 2
              </Typography>
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "start",
                  },
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A et
                facere ut enim fuga voluptas iste sunt laudantium quo eos. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Neque quas
                cupiditate debitis ipsam soluta accusantium hic ullam, fugiat
                cum quibusdam dolorum doloremque odit, repellat ea ut laboriosam
                aliquid vitae, quisquam exercitationem nam! Suscipit quod facere
                maiores necessitatibus, vero vel tenetur! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Velit odio sed dignissimos
                voluptatum quisquam fugit, laudantium maxime nemo nesciunt ullam
                cupiditate aspernatur totam! Similique tempora fuga quibusdam
                ullam quidem expedita doloribus? Omnis itaque ad, distinctio
                iusto quia ea eligendi enim magni tempora accusamus. Laudantium
                atque repellendus temporibus placeat consequuntur necessitatibus
                cum sit, facere, ipsa explicabo corporis? Ad, minus. Nulla,
                quam!
              </Typography>
            </Box>
          </Container>
        </Grid>

        {/* right section */}
        <Grid item md={4} xs={12}>
          {/* about */}
          <Container
            sx={{
              backgroundColor: "lightgrey",
              py: 5,
              borderRadius: 2,
              textAlign: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Typography variant="h6">About</Typography>
            <Typography variant="para">
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum
              nulla sed consectetur.
            </Typography>
          </Container>

          {/* archives */}
          <Container
            sx={{
              py: 3,
              textAlign: {
                xs: "center",
                md: "start",
              },
            }}
            disableGutters
          >
            <Typography variant="h5">Archives</Typography>
            <List sx={{ display: "flex", flexDirection: "column" }}>
              {[1, 2, 3, 4, 5].map((index) => (
                <ListItem
                  key={index}
                  sx={{
                    textAlign: {
                      xs: "center",
                      md: "start",
                    },
                  }}
                >
                  <ListItemText>
                    <Link sx={{ color: "black", cursor: "pointer" }}>
                      item {index}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Container>

          {/* social */}
          <Container
            disableGutters
            sx={{
              textAlign: {
                xs: "center",
                md: "start",
              },
            }}
          >
            <Typography variant="h5">Social</Typography>
            <List>
              {[1, 2, 3].map((index) => (
                <ListItem
                  sx={{
                    textAlign: {
                      xs: "center",
                      md: "start",
                    },
                  }}
                >
                  <ListItemText>
                    <Link sx={{ color: "black", cursor: "pointer" }}>
                      item{index}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Blog;
