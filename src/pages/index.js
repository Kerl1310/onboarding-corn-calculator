import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import siteConfig from '../../data/en';

const title = siteConfig.siteTitle;

function calculate(form) {
  form.action = "calculate.html";
  alert('Hello');
  return 0.25 * form.input;
}

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <h1>{title}</h1>
    <p>.</p>
    <form onSubmit="return calculate(this)">
    <label for="amountOfCorn">Amount of Corn:</label>
      <input type="number" id="amountOfCorn" name="amountOfCorn"></input>
      <br/>
      <br/>
      <input id="calculate" type="submit" value="Get Price"></input>
    </form>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
