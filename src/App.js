import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/About';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const deleteTodo = (todo) => {
    console.log("I am deleting this todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("Deleted", todo);
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sn;
    if (todos.length === 0) {
      sn = 1;
    }
    else {
      sn = todos[todos.length - 1].sn + 1;
    }
    const myTodo = {
      sn: sn,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log("Added", myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <About />
      <Footer />
    </>
  );
}

export default App;
