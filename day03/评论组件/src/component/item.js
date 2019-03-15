import React, { Component } from 'react'; 


class Item extends Component {

  constructor(...args){
    super(...args)
  }


  render() {
    return (
        <p>tilte:<a href={`/details/${this.props.id}`}>{this.props.title}</a>,time:{this.props.time}</p>
    );
  }
}

export default Item;
