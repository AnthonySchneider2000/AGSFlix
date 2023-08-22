import React from "react";
import Layout from "../components/Layout/Layout";
import { useShowDataContext } from "../utils/ShowContext";

export default function ShowPage() {
  const { currentShow } = useShowDataContext();
  console.log(currentShow);
  const pageTitle = currentShow ? `${currentShow.Title}` : "AGSFlix";

  return (
    <Layout title={pageTitle}>
      <div>
        <h1>ShowPage</h1>
      </div>
    </Layout>
  );
}
