import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

function ToDoApp() {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        (async () => {
            let data = await fetch("https://tranquil-everglades-65025.herokuapp.com/get");
            data = await data.json();
            setTodo(data);
        })();
    }, []);

    let updateDone = async (idx) => {
        const data = [...todo];
        if (!data[idx].done) {
            data[idx].done = true;
            let t = await fetch(
                "https://tranquil-everglades-65025.herokuapp.com/update",
                {
                    method: "POST",
                    body: JSON.stringify({ id: data[idx]._id }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            t = await t.json();
            setTodo(data);
        }
    };
    return (
        <NavMenu>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                {todo.map((t, idx) => {
                    return (
                        <div key={t._id} style={{ flex: 1, flexDirection: "row" }}>
                            <input
                                type="checkbox"
                                onChange={() => updateDone(idx)}
                                checked={t.done}
                            />
                            <span>{t.description}</span>
                        </div>
                    );
                })}
                <Link to="/create_todo">
                    Create Todo
            </Link>
            </div>
        </NavMenu>
    );
}

export default withRouter(ToDoApp);