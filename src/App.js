import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { useState, useEffect } from 'react';
import { AddTodo } from './Components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './Components/About';

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title, desc) => {
    console.log("I am todo ", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const onDelete = (todo) => {
    console.log("I am deleted.", todo)
    //window.alert("I am deleted.",todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <div>
      <Router>
        <Header title="My Todos List" search={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
