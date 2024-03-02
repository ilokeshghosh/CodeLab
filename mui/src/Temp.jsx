import React from "react";

function Temp() {
  return (
    <Container
      sx={{
        height: {
          xs: "auto",
          md: "100vh",
        },
        backgroundColor: "#101418",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // overflowY: "auto",
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
          py: 4,
        }}
      >
        {/* card */}
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#293743",
            color: "white",
            border: "1px solid grey",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Button
                variant="outline"
                sx={{
                  border: "1px solid grey",
                  width: "100%",
                  mt: 1,
                  display: "flex",
                  gap: 1,
                }}
                disableElevation
              >
                <CodeIcon />
                Source Code
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#293743",
            color: "white",
            border: "1px solid grey",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Button
                variant="outline"
                sx={{
                  border: "1px solid grey",
                  width: "100%",
                  mt: 1,
                  display: "flex",
                  gap: 1,
                }}
                disableElevation
              >
                <CodeIcon />
                Source Code
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#293743",
            color: "white",
            border: "1px solid grey",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Button
                variant="outline"
                sx={{
                  border: "1px solid grey",
                  width: "100%",
                  mt: 1,
                  display: "flex",
                  gap: 1,
                }}
                disableElevation
              >
                <CodeIcon />
                Source Code
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
}

export default Temp;
