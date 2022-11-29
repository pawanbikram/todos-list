import React from 'react';

export default function TodoItem({ todo, deleteTodo }) {
    return (
        <div>
            <hr />
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-outline-danger" onClick={() => { deleteTodo(todo) }}>Delete</button>
            <hr />
        </div>
    )
}
