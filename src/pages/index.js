import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import siteConfig from '../../data/en';
import { object } from "prop-types"

const description = siteConfig.siteDescription;
const unitPrice = 0.25

export default class IndexPage extends React.Component {
  state = { 
    cornQuantity: 0,
    geeseQuantity: 0,
    totalPrice: 0
  }
  
  handleInputChange = event => {
    if (event.target.name === "corn-quantity") {
      const cornQuantity = Number(event.target.value)
      this.setState ({
        cornQuantity: cornQuantity
      })
    }

    if (event.target.name === "geese-quantity") {
      const geeseQuantity = Number(event.target.value)
      this.setState ({
        geeseQuantity: geeseQuantity
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const totalUnits = this.state.cornQuantity + this.state.geeseQuantity

    const totalPrice = ((totalUnits * 2) * unitPrice) - unitPrice

    this.setState ({
      totalPrice: totalPrice
    })
   }

  render() {
    return <Layout>
    <SEO title="Home" />
    <p id="description">{description}</p>
    <form id="calculatorForm" onSubmit={this.handleSubmit}>
      <label htmlFor="corn-quantity">Amount of Corn: </label>
      <input type="number" min="0" id="corn-quantity" name="corn-quantity" onChange={this.handleInputChange} placeholder="0"></input>
      <br/>
      <br/>
      <label htmlFor="geese-quantity">Amount of Geese: </label>
      <input type="number" min="0" id="geese-quantity" name="geese-quantity" onChange={this.handleInputChange} placeholder="0"></input>
      <br/>
      <br/>
      <input id="calculate" type="submit" value="Get Price"></input>
    </form>
    <p id="price-p">Price: £<span id="price-span">{this.state.totalPrice}</span></p>
  </Layout>
  }
}