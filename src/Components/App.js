import React, { Component } from "react";

import Layout from "./pages/layout";

import Container from "./common/Container";
import Card from "./common/Card";
import promotions from "./mocks/Promotions";
import CardContainer from "./common/CardContainer";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }

  renderCards() {
    this.cards = promotions.map((promotion, index) => (
      <Card key={index} cardInfo={promotion} />
    ));
  }

  render() {
    this.renderCards();
    return (
      <>
        <Layout>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
          <Container>
            <CardContainer> {this.cards}</CardContainer>
          </Container>
        </Layout>
      </>
    );
  }
}
export default App;
