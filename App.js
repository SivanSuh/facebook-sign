import React from "react";
import Title from "./components/Title";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
            <Title />
            <Form />
      </div>
    </Router>
  );
}

export default App;
