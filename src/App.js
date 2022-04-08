import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import GetTodo from "./GetTodo";
import Status from "./Status";

function App() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const result = response.data;
        setTodo(result.slice(0, 20));
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const handleChange = (id) => {
    const list = [...todo];
    const result = list.map((ele) => {
      if (ele.id === id) {
        return { ...ele, completed: !ele.completed };
      } else {
        return ele;
      }
    });
    setTodo(result);
  };

  return (
    <div className="">
      <div style={{ marginTop: "30px" }} className="container">
        <div className="row">
          <div className="col-md-6">
            <GetTodo todo={todo} handleChange={handleChange} />
          </div>
          <div className="col-md-6">
            <Status todo={todo} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
