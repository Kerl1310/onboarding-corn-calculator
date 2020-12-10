import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Calculate from "../components/calculator"
import checkFeasibility from "../components/feasibility";
import siteConfig from '../../data/en';

const description = siteConfig.siteDescription;
const unitPrice = 0.25

export default class IndexPage extends React.Component {
  state = {
    warningMessage: "",
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
    else if (event.target.name === "geese-quantity") {
      const geeseQuantity = Number(event.target.value)
      this.setState ({
        geeseQuantity: geeseQuantity
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      warningMessage: checkFeasibility(this.state.cornQuantity, this.state.geeseQuantity)
    })

    if (this.state.warningMessage === "") {
      const totalPrice = Calculate(this.state.cornQuantity, this.state.geeseQuantity, unitPrice)

      this.setState ({
        totalPrice: totalPrice
      })
    }
   }

  render() {
    let output = "";

    console.log(this.state.warningMessage)

    if (this.state.warningMessage === "") {
      output = <p id="price-p">Price: £<span id="price-span">{this.state.totalPrice}</span></p>
    } else {
      output = <p className="warning-p">Warning: <span id="warning-span">{this.state.warningMessage}</span></p>
    }
    
    return <Layout>
    <SEO title="Home" />
    <p id="description">{description}</p>
    <form id="calculatorForm" onSubmit={this.handleSubmit}>
      <label htmlFor="corn-quantity">Amount of Corn: </label>
      <input type="number" min="0" id="corn-quantity" name="corn-quantity" className="quantity" onChange={this.handleInputChange} placeholder="0"></input>
      <br/>
      <br/>
      <label htmlFor="geese-quantity">Amount of Geese: </label>
      <input type="number" min="0" id="geese-quantity" name="geese-quantity" className="quantity" onChange={this.handleInputChange} placeholder="0"></input>
      <br/>
      <br/>
      <input id="calculate" type="submit" value="Get Price"></input>
    </form>
    {output}
  </Layout>
  }
}