import React, { Fragment, useEffect } from "react";
import ListaCadeiras from "../components/ListaDeCadeiras";
import classes from "../styles/Home.module.scss";
import { useState } from "react";
import Head from "next/head";
const HomePage = ({ data }) => {
  const [númeroDeCadeiras, setNúmeroDeCadeiras] = useState(15);
  const handleSelection = (e) => {
    const nCadeiras = Number(e.target.value);
    setNúmeroDeCadeiras(nCadeiras);
  };
  return (
    <Fragment>
      <Head>
        <title>Reserva de cadeiras</title>
        <meta
          name="description"
          content="Esta aplicação serve para reservar cadeiras"
        />
      </Head>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Escolha uma cadeira </h1>
          <div>
            <select
              onClick={handleSelection}
              className={classes.select}
              name=""
              id=""
            >
              <option value="0">Escolha o número de cadeiras</option>
              <option value="15">Sala A - 15 lugares</option>
              <option value="20">Sala B - 20 lugares</option>
              <option value="25">Sala C - 25 lugares</option>
              <option value="30">Sala D - 30 lugares</option>
              <option value="40">Sala E - 40 lugares</option>
              
            </select>
          </div>
        </div>
        <ListaCadeiras mockData={data} init={númeroDeCadeiras} />
      </div>
    </Fragment>
  );
};

// Carregar número de cadeiras da base de dados
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/hello");
  const data = await response.json();
console.log(data.data);
  return {
    props: {
      data: data
    },
    revalidate: 1,
  };
}

export default HomePage;
