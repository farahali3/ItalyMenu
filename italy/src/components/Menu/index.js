import React from "react"
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.menuName} Menu</h2>
                    {this.props.menuItems.map ((menuItem) => (
                        <MenuItem {...menuItem}></MenuItem>
                    ))}

            </div>
        )
    }
}
