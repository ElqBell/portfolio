import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout/layout";
import localStyles from "./404.module.css";

export default function NotFound() {
  return (
    <Layout>
      <h1 className="heading-1">Sorry, but this page doesn't exist.</h1>
      <Link to="/" className="button">Go to home page</Link>
    </Layout>
  );
}
