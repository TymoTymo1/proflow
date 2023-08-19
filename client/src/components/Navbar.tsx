import "../styles/Navbar.css"
import React from "react";
const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="navbar-item file">File</div>
            <div className="navbar-item home">Home</div>
            <div className="navbar-item insert">Insert</div>
        </div>
    )
}

export default Navbar;
