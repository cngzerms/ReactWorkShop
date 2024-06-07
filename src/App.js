import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Nav from "./Nav";
import ProductList from "./ProductList";
import CardList from "./CardList";
import NotFound from "./NotFound";
import FormDemo1 from "./FormDemo1";
import alertify from "alertifyjs";

export default class App extends Component {
  state = { currentCategory: "", products: [], card: [] };
  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };

  addToCard = (product) => {
    let newCard = this.state.card;
    var addedItem = newCard.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCard.push({ product: product, quantity: 1 });
    }
    this.setState({ card: newCard });
    alertify.success(product.productName + "added to cart!");
  };

  removeFromCard = (product) => {
    let newCard = this.state.card.filter((c) => c.product.id !== product.id);
    this.setState({ card: newCard });
    alertify.error(product.productName + "removed to cart!");
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Nav removeFromCard={this.removeFromCard} card={this.state.card} />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      addToCard={this.addToCard}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  }
                />
                <Route
                  exact
                  path="/card"
                  element={
                    <CardList
                      card={this.state.card}
                      removeFromCard={this.removeFromCard}
                    />
                  }
                />
                <Route exact path="/form1" element={<FormDemo1 />}></Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
