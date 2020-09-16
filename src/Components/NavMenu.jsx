import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function NavMenu({ children }) {
    return (
        <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
            <div style={{ display: "flex", flex: 1, flexDirection: "column", border: "1px sold black" }}>
                <Link to="/">Home</Link>
                <Link to="/create_todo">Create Todo</Link>
            </div>
            {children}
        </div>
    )
}

export default NavMenu;