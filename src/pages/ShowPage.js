import React from "react";
import Layout from "../components/Layout/Layout";
import { useShowDataContext } from "../utils/ShowContext";

export default function ShowPage() {
  const { currentShow, showTitle } = useShowDataContext();
  console.log(currentShow);
  const pageTitle = currentShow ? currentShow.Title : (showTitle ? showTitle : "AGSFlix");

  return (
    <Layout title={pageTitle}>

    </Layout>
  );
}
