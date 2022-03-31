import { useState } from "react";
import "./app.css";

const App = () => {
  const [valor, SetValor] = useState(0);

  const handleClick = (v) => {
    SetValor(v+1);
  };

  return (
    <div className="App">
      <h3> Contador </h3>
      <hr />
      <h2 className="text-center">{valor}</h2>
      <hr />
      <div className="margin-button">
        <button 
        className="btn btn-primary me-2" 
        onClick={() =>handleClick(valor)}
        >
          +1
        </button>
      </div>
    </div>
  );
};
export default App;
