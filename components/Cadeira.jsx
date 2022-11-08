import { useCallback, useEffect, useReducer, useState } from "react";
import classes from "./Cadeira.module.scss";
const Cadeira = ({ id, status }) => {
  const [cadeiraOcupada, setCadeiraOcupada] = useState(status);
  //adiciona estado das cadeiras na base de dados

  const escolherCadeira = () => {
    setCadeiraOcupada(!cadeiraOcupada);
    // todasCadeiras.push({ cadeira: id, ocupado: !cadeiraOcupada });
    fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify({ cadeira: id, ocupado: !cadeiraOcupada }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const ocupado = cadeiraOcupada
    ? classes.cadeiraOcupada
    : classes.cadeiraDesocupada;
  return (
    <div
      onClick={escolherCadeira}
      className={`${classes.container} + ${ocupado}`}
    >
      <p>cadeira {id}</p>
    </div>
  );
};

export default Cadeira;
