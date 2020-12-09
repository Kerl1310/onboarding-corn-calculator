import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import siteConfig from '../../data/en';
import { object } from "prop-types"

const title = siteConfig.siteTitle;
const description = siteConfig.siteDescription;

export default class IndexPage extends React.Component {
  state = { 
    quantity: 0,
    price: 0
  }
  
  handleInputChange = event => {
    const quantity = event.target.value

    this.setState ({
      quantity: quantity
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const price = this.state.quantity * 0.25

    this.setState ({
      price: price
    })
   }

  render() {
    return <Layout>
    <SEO title="Home" />
    <h1>{title}</h1>
    <p>{description}</p>
    <form onSubmit={this.handleSubmit}>
    <label htmlFor="quantity">Amount of Corn: </label>
      <input type="number" min="0" id="quantity" name="quantity" onChange={this.handleInputChange}></input>
      <br/>
      <br/>
      <input id="calculate" type="submit" value="Get Price"></input>
    </form>
    <p>Price: £<span>{this.state.price}</span></p>
  </Layout>
  }
}