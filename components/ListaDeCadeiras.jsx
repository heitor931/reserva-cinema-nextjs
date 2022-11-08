import classes from "./ListaDeCadeiras.module.scss";
import { useEffect, useMemo, useState } from "react";

import Cadeira from "./Cadeira";

const ListaDeCadeiras = ({ mockData, init }) => {
  const [data, setData] = useState([]);

  // Adicionar número de cadeiras selecionadas pelo utilizador
  useEffect(() => {

    const cadeirasVazias = [];
    const numbers = [...Array(init).keys()];
    numbers.forEach((idx) => {
      cadeirasVazias.push({ cadeira: idx + 1, ocupado: false });
    });
    async function send(data) {
      await fetch("http://localhost:3000/api/hello",{
        method: "POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
    }

    send({id:init, data:cadeirasVazias})

    setData(cadeirasVazias);
  }, [init, mockData]);

  //Carregar número de cadeiras da base de dados.
  useEffect(() => {
    if (mockData) {
      setData(mockData);
    }
  }, [mockData]);

  return (
    <div className={classes.container}>
      {data.map(({ cadeira, ocupado }, idx) => {
        return <Cadeira key={idx} id={cadeira} status={ocupado} />;
      })}
    </div>
  );
};

export default ListaDeCadeiras;
