import React, { Component } from 'react';
import './Stock.css';

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: 10,
      buyQuantity: 1,
      customerName: '',
      message: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ buyQuantity: parseInt(e.target.value) || 0 });
  };

  handleNameChange = (e) => {
    this.setState({ customerName: e.target.value });
  };

  addStock = () => {
    this.setState((prevState) => ({
      stock: prevState.stock + prevState.buyQuantity,
      message: `${prevState.buyQuantity} item(s) added to stock.`
    }));
  };

  buyStock = () => {
    const { stock, buyQuantity, customerName } = this.state;

    if (!customerName.trim()) {
      alert("Please enter customer name.");
      return;
    }

    if (buyQuantity <= stock) {
      this.setState((prevState) => ({
        stock: prevState.stock - prevState.buyQuantity,
        message: `${customerName} bought ${prevState.buyQuantity} item(s). Remaining stock: ${prevState.stock - prevState.buyQuantity}`,
        customerName: ''
      }));
    } else {
      alert(`Only ${stock} item(s) in stock. Cannot buy ${buyQuantity}.`);
    }
  };

  reset = () => {
    this.setState({
      stock: 0,
      buyQuantity: 1,
      customerName: '',
      message: 'Stock has been reset.'
    });
  };

  render() {
    return (
      <div className="stock-container">
        <h1 className="stock-header">Welcome to our Mart</h1>
        <h2 className="stock-quantity">Stock Quantity: {this.state.stock}</h2>

        <input
          type="text"
          placeholder="Customer Name"
          value={this.state.customerName}
          onChange={this.handleNameChange}
          className="stock-input"
        />

        <input
          type="number"
          min="1"
          value={this.state.buyQuantity}
          onChange={this.handleInputChange}
          className="stock-input"
        />

        <div className="button-group">
          <button className="stock-button" onClick={this.addStock}>Add Stock</button>
          <button className="stock-button" onClick={this.buyStock}>Buy Stock</button>
          <button className="stock-button" onClick={this.reset}>Reset</button>
        </div>

        {this.state.message && <p className="stock-message">{this.state.message}</p>}
      </div>
    );
  }
}

export default Stock;
