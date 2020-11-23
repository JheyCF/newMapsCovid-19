import React from "react";

import Menu from "../../components/Menu/index";

import "./styles.css";

function Home() {
  return (
    <div id="page-home">
      <div className="header-img">
        <div className="menu">
          <nav>
            <Menu />
          </nav>
        </div>

        <div className="text-home">
          <h1>MapsCovid-19</h1>
          <p>
            Olá! Aqui você irá encontrar dados epdemiologicos das áreas afetadas
            pelo covid-19, para ajudar a secretaria de saúde do municipio na
            divulgação de dados dos bairros afetados pelo vírus, assim como,
            torna a população mais ciente da propagação.
          </p>

          <div className="button-home">
            <button>Button </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
