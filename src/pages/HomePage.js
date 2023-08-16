import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const border = "1px solid black";

const ShowsRowsContainer = ({ children }) => {
  return (
    <Box
      sx={{
        height: "200vh",
        display: "flex",
        flexDirection: "column",
        padding: "min(1%, 20px) min(1%, 20px)",
        gap: "min(1%, 20px)",
      }}
    >
      {children}
    </Box>
  );
};

const ShowsRow = ({ children, genre }) => {
  return (
    <Box
      sx={{
        border: {border},
      }}
    >
      {" "}
      <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
        {genre}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          border: {border},
          padding: "0 min(2%, 20px)",
          gap: "min(3%, 20px)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const Show = () => {
  return <h1>Home Page</h1>;
};

const HomePage = () => {
  return (
    <Layout title="Home">
      <ShowsRowsContainer>
        <ShowsRow genre="Horror">
          <Show />
          <Show />
          <Show />
        </ShowsRow>
        <ShowsRow>
          <Show />
          <Show />
          <Show />
        </ShowsRow>
        <ShowsRow>
          <Show />
          <Show />
          <Show />
        </ShowsRow>
      </ShowsRowsContainer>
    </Layout>
  );
};

export default HomePage;
