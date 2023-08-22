import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Paper,
} from "@mui/material";

const border = "none";

const ShowsRowsContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: "200vh",
        display: "flex",
        flexDirection: "column",
        // padding: "min(1%, 20px) 0",
        gap: "min(1%, 20px)",
      }}
    >
      {children}
    </Box>
  );
};

const ShowsRow = ({ children, genre }) => {
  return (
    <Paper
      sx={{
        border: { border },
        maxHeight: "min(30%, 300px)",
        padding: "min(2%, 20px)",
        borderRadius: "0",
      }}
      elevation={2}
    >
      {" "}
      <Typography variant="h5" sx={{ fontWeight: "bold", paddingBottom: "min(1%, 20px)" }}>
        {genre}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          border: { border },
          gap: "min(3%, 20px)",
          width: "100%",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

const Show = ({ imgSrc }) => {
  return (
    <Card
      sx={{
        flexShrink: 0,
        border: { border },
        width: "min(30%, 300px)",
        height: "100%",
        maxHeight: "min(30%, 300px)",
        borderRadius: "5%",
        paddingBottom: 0,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: "min(150px,10vh)",
          }}
          image={
            imgSrc ||
            "https://mui.com/static/images/cards/contemplative-reptile.jpg"
          }
          alt="show"
        />
        <CardContent
          sx={{
            padding: "min(5%, 20px)",
          }}
        >
          <Typography variant="h6" textAlign="center">
            Show Title
          </Typography>
          <Typography variant="body1" textAlign="center">
            Description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ShowsRow1 = () => {
  return (
    <>
      <Show
        imgSrc={
          "https://www.southernliving.com/thmb/Rz-dYEhwq_82C5_Y9GLH2ZlEoYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-837898820-1-4deae142d4d0403dbb6cb542bfc56934.jpg"
        }
      />
      <Show />
      <Show />
      <Show />
      <Show />
      <Show />

    </>
  );
};

const ShowsRow2 = () => {
  return (
    <>
      <Show />
      <Show />
      <Show />
    </>
  );
};

const ShowsRow3 = () => {
  return (
    <>
      <Show />
      <Show />
      <Show />
    </>
  );
};


const HomePage = () => {
  return (
    <Layout title="Home">
      <ShowsRowsContainer>
        <ShowsRow genre="Nature">
          <ShowsRow1 />
        </ShowsRow>
        <ShowsRow genre="Action">
          <ShowsRow2 />
        </ShowsRow>
        <ShowsRow genre="Comedy">
          <ShowsRow3 />
        </ShowsRow>
      </ShowsRowsContainer>
    </Layout>
  );
};

export default HomePage;
