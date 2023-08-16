import React from "react";
import Layout from "../components/Layout/Layout";
import { Paper } from "@mui/material";

const HomePage = () => {
  return (
    <Layout title="Home" useCustomScrollbar>
      {/* long paper, just so I can test scrolling*/}
      <Paper sx={{ height: "200vh" }} />

    </Layout>
  );
};

export default HomePage;
