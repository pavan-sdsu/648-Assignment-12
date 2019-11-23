import React, { Component } from "react";

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

class ProductForm extends Component {

	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			product: Object.assign({}, RESET_VALUES), errors: {}
		}
	}

	handleSave(e) {
		e.preventDefault();
		this.props.onSave(this.state.product)
		this.setState({
			product: Object.assign({}, RESET_VALUES), errors: {}
		})
	}

	handleChange(e) {
		const target = e.target
		const value = target.value
		const name = target.name
		this.setState((prevState) => {
			prevState.product[name] = value
			return { product: prevState.product }
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSave}>
				<h4>Enter a new product</h4>
				Name <br />
				<input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.product.name} required /> <br /> <br />

				Category <br />
				<input type="text" name="category" id="category" onChange={this.handleChange} value={this.state.product.category} required /> <br /> <br />

				Price <br />
				<input type="text" name="price" id="price" onChange={this.handleChange} value={this.state.product.price} required /> <br /> <br />

				<input type="submit" value="Submit" />
			</form>
		)
	}

}

export default ProductForm;