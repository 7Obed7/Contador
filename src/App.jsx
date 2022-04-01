import { useState } from "react";
import "./app.css";

const App = () => {
  const [cuenta, SetCuenta] = useState({
    valor: 0,
    paso: 1,
    /**Se agregó una nueva variable para poder restar */ paso2: 0,
  });

  // Agregando const para suma
  const handleClick = () => {
    SetCuenta({
      /*Operador espread*/ ...cuenta,
      valor: cuenta.valor + cuenta.paso,
    });
  };

  /*Se agregó una nueva constante para poder hacer el paso de la resta*/
  const handleClickr = () => {
    SetCuenta({
      /*Operador espread*/ ...cuenta,
      valor: cuenta.valor - cuenta.paso2,
    });
  };
  /*Se agregó una nueva constante para poder hacer el reset, tomando en cuenta que el valor inicial es cero*/
  const handleClickre = () => {
    SetCuenta({ /*jjjj*/ ...cuenta, valor: 0 });
  };

  const handleChange = (e) => {
    const paso = Number(e.target.value);
    if (isNaN(paso)) {
      return;
    }
    SetCuenta({ /*Operador espread*/ ...cuenta, paso: Number(e.target.value) });
  };
  const handleChanger = (e) => {
    const paso2 = Number(e.target.value);
    if (isNaN(paso2)) {
      return;
    }
    SetCuenta({
      /*Operador espread*/ ...cuenta,
      paso2: Number(e.target.value),
    });
  };

  const handleChangeres = (e) => {
    const paso2 = Number(e.target.value);
    const paso = Number(e.target.value);
    if (isNaN(paso2)) {
      return;
    }
    if (isNaN(paso)) {
      return;
    }
    SetCuenta({
      /*Operador espread*/ ...cuenta,
      paso: Number(e.target.value),
    });

    SetCuenta({
      /*Operador espread*/ ...cuenta,
      paso2: Number(e.target.value),
    });
  };
  //Tarea: Un botón para restar y otro para reset

  const handleKeyDown = (e) => {
    const value = Number(e.key);
    if (
      e.key === "Backspace" ||
      e.key === "Enter" ||
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "Tab"
    ) {
      return;
    }

    if (isNaN(value) || e.key === " ") {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="App">
      <h3> Contador </h3>
      <hr />
      <h2 className="text-center">{cuenta.valor}</h2>
      <hr />
      <div className="margin-button">
        <label>
          Paso con suma
          <input
            type=""
            style={{ width: "60px", margin: "5px" }}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button className="btn btn-primary me-2" onClick={handleClick}>
          +{cuenta.paso}
        </button>
        {/* Label resta */}
        <label>
          Paso con resta
          <input
            type=""
            style={{ width: "60px", margin: "5px" }}
            onChange={handleChanger}
            onKeyDown={handleKeyDown}
          />
        </label>
        {/* Botón para restar*/}
        <button className="btn btn-primary me-2" onClick={handleClickr}>
          {/* llamando lo que tenemos en cuenta y el paso2 */}-{cuenta.paso2}
        </button>
        <br />
        {/* Botón para reset*/}
        <button className="btn btn-primary me-2" onClick={handleClickre}
        onChange={handleKeyDown}
        onChanges={handleChangeres}
        >
          {/* jan*/}
          Reset: {cuenta.valor}
        </button>
      </div>
    </div>
  );
};
export default App;
