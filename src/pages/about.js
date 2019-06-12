import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>This is my about me page</p>
      <p>
        Maybe you want to get in touch with me,{" "}
        <Link to="/contact">click here!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
