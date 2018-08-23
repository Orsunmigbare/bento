import React from "react"
import { Layout } from "@staccx/base"
import Hero from "../components/Hero/Hero"

const Home = () => (
  <div>
    <Layout paddingTop="grid" rowGap="grid">
      <Hero
        heading="Stacc is a financial services  company.
        We create building blocks for disruption and mayhem."
        callToAction="Get in touch"
      />
    </Layout>
  </div>
)

export default Home
