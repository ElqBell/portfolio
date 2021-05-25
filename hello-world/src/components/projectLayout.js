import React from "react";
import { Helmet } from "react-helmet";
import Layout from "./layout";

export default function ProjectLayout(props) {
  return (
    <Layout mainClass={props.mainClass}>
      <Helmet>
        <title>{`Deimantas Butėnas - Project ${props.projectNum}`}</title>
      </Helmet>
      {props.children}
    </Layout>
  );
}
