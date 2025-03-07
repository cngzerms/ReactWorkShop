import React, { Component } from "react";
import { Table, Button } from "reactstrap";
export default class ProductList extends Component {
  
  render() {
    return (
      <div>
        <div>
          <h3>
            {this.props.info.title} - {this.props.currentCategory}
          </h3>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>quantity Per Unit</th>
                <th>unit Price</th>
                <th>units In Stock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td><Button onClick={()=>this.props.addToCard(product)} color="primary">Add</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
