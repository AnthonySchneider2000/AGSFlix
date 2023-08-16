import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Button } from "@mui/material";

const LotsOfButtons = () => {
  return (
    <>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
      <Button variant="contained">Test</Button>
    </>
  );
};

const HomePage = () => {
  
  return (
    <Layout title="Home" toolbarHeight={100}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <LotsOfButtons />
        <LotsOfButtons />
        <LotsOfButtons />
        <LotsOfButtons />
      </Box>
    </Layout>

  );
};

export default HomePage;
