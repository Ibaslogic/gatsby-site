import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Get in touch with me through my twitter handle
        <a href="https://twitter.com/ibaskunle" target="_blank">
          @ibaskunle
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
