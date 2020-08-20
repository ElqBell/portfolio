import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import localStyles from "./404.module.css";

export default function NotFound() {
  return (
    <Layout mainClass={localStyles.mainContent}>
      <Helmet>
        <title>{`DMD - Not Found`}</title>
      </Helmet>
      <h1 className="heading-1">Sorry, but this page doesn't exist.</h1>
      <Link to="/" className="button">Go to home page</Link>
    </Layout>
  );
}
