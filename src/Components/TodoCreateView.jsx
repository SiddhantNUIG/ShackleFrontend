import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";


function ToDoCreate({ history }) {
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    const save = async () => {
        const url = "https://tranquil-everglades-65025.herokuapp.com/create";
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ description: desc, createdBy: name }),
        });
        history.goBack();
    };
    return (
        <NavMenu>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <label>
                    Description
          <input type="text" onChange={(e) => setDesc(e.target.value)} />
                </label>
                <label>
                    UserName
          <input type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                <button onClick={save}>Save</button>
                <Link to='/'>Cancel</Link>
            </div>
        </NavMenu>
    );
}

export default withRouter(ToDoCreate);