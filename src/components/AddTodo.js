import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty!");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h2>Add Todos</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" />
                </div>
                <button type="submit" className="btn btn-sm btn-outline-success">Add Todo</button>
            </form>
        </div>
    )
}
