import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class CardList extends Component {
  render() {
    return (
      <div>
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
              {this.props.card.map((cardItem) => (
                <tr key={cardItem.product.id}>
                  <th scope="row">{cardItem.product.id}</th>
                  <td>{cardItem.product.productName}</td>
                  <td>{cardItem.product.quantityPerUnit}</td>
                  <td>{cardItem.product.unitPrice}</td>
                  <td>{cardItem.product.unitsInStock}</td>
                  <td>
                    <Button color='danger' onClick={() => this.props.removeFromCard(cardItem.product)}>X</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
      </div>
    )
  }
}
