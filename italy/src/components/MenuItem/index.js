import React from "react"


export default class MenuItem extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.itemName}</h2>
                <p>{this.props.itemDescription}</p>
                <span>${this.props.itemPrice}</span> 
                <br></br>
                <button> Add to Cart </button>
            </div>
        );
    }
}
