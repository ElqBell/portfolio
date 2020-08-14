import React from "react";
import Layout from "./layout";

export default function ProjectLayout(props) {
  return (
    <Layout mainClass={props.mainClass}>
      {props.children}
    </Layout>
  );
}
