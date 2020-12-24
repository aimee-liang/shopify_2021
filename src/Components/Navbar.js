import React from "react"
import {NavLink} from "react-router-dom"

const Navbar = props => {
    return (
        <>
            <h3>The Shoppies</h3>
            <NavLink to="/home" >Home</NavLink>
            <NavLink to="/nominees">Nominees</NavLink>
        </>
    )
}

export default Navbar