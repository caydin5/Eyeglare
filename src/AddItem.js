import React, { Component } from 'react'


class AddItem extends Component {
  state = {
    name: null,
    color: null,
    engraving: null,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
  }
  render() {
    return (
      <div>
        <form className="form container" action="#" onSubmit={this.handleSubmit}>
          <h6>Lens Type:</h6>
          <label>
            <p><input type="checkbox" className="cyan-text" onChange={this.handleChange}></input>
              <span>Prescribed</span></p></label>
          <label>
            <p><input type="checkbox"></input>
              <span>Non-prescribed</span></p>
          </label>
          <h6>Tint:</h6>
          <label>
            <p><input type="checkbox" className="cyan-text" onChange={this.handleChange}></input>
              <span>Yellow</span></p></label>
          <label>
            <p><input type="checkbox" onChange={this.handleChange}></input>
              <span>Blue</span></p>
          </label>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Model:</label>
          <input type="text" id="model" onChange={this.handleChange} />
          <label htmlFor="color">Color:</label>
          <input type="text" id="color" onChange={this.handleChange} />
          <label htmlFor="engraving">Engraving:</label>
          <input type="text" id="engraving" onChange={this.handleChange} />
          <button className="waves-effect cyan btn">Add to Cart</button>
        </form>
      </div>
    )
  }
}

export default AddItem