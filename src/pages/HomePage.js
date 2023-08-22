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
        padding: "min(1%, 20px) 0",
        borderRadius: "0",
      }}
      elevation={2}
    >
      {" "}
      <Typography variant="h5" sx={{ fontWeight: "bold", padding: "0 0 min(1%, 20px) min(1%, 20px)" }}>
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
          padding: "0 min(1%, 20px)",
          "&::-webkit-scrollbar": {
            height: "0.8em",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0, 0, 0, 0.4)", // Adjust the alpha value (last parameter) to control transparency
            borderRadius: "1em",
          },

        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

const Show = ({ imgSrc, title, description }) => {
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
        marginBottom: "min(1%, 20px)",
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
            height: "min(85px,10vh)",
          }}
        >
          <Typography variant="h6" textAlign="center">
            {title || "Show Title"}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {description || "Show Description"}
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
        title="Golden Retriever"
        description="Movie: 1 hour 30 minutes"
      />
      <Show
        imgSrc={
          "https://i.imgur.com/w8K0pgb.png"
        }
        title="Komodo Dragon"
        description="Series: 3 Seasons"
      />
      <Show
        imgSrc={
          "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching.jpg"
        }
        title="Cheetah"
        description="Movie: 1 hour 30 minutes"
      />
      <Show
        imgSrc={
          "https://www.denofgeek.com/wp-content/uploads/2020/04/Nat-Geo-WILD-Social-Distancing-Otter.jpg?fit=1294%2C787"
        }
        title="Otter"
        description="Series: 2 Seasons"
      />
      <Show
        imgSrc={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCk7nHcF5KVy76IqPwsHBb0Kvvhl4y75RJGg"
        }
        title="Water Buffalo"
        description="Movie: 1 hour 30 minutes"
      />
      <Show
        title={"Lizard"}
        description={"Series: 2 Seasons"}
      />

    </>
  );
};

const ShowsRow2 = () => {
  return (
    <>
      <Show 
        imgSrc={
          "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/646987-jasin-boland-c-2012-warner-bros-entertainment-inc-54e2f8c553776eafbfd8ede11121a700.jpg"
        }
        title="Final Fight"
        description="Movie: 1 hour 30 minutes"
      />
      <Show 
        imgSrc={
          "https://i.imgur.com/EJJr54n.png"
        }
        title="John Wick"
        description="Movie: 1 hour 30 minutes"
      />
      <Show
        imgSrc={
          "https://hips.hearstapps.com/hmg-prod/images/best-action-movies-1657201809.jpg"
        }
        title="Edge of Tomorrow"
        description="Movie: 1 hour 30 minutes"
      />
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
    <Layout title="Home" disableScrollbar>
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
