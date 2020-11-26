import React, { Component } from "react";

import Logo from "../../components/logo-menu";

import Menu from "../../components/Menu/dados";


import Rodape from "../../components/Rodape";

import BairrosConfirm from "../../server/bairrosConfirmados";
import "./styles.css";

import DataAtual from "../../server/geral/dataAtual";
import GeralSuspeitos from "../../server/geral/geralSuspeitos";
import GeralConfirmados from "../../server/geral/geralConfirmados";
import GeralRecuperados from "../../server/geral/geralRecuperados";
import GeralObitos from "../../server/geral/geralObitos";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import corona1 from "../../img/corona1.png";
import corona3 from "../../img/corona3.png";
import corona4 from "../../img/corona4.png";
import corona5 from "../../img/corona5.png";
import undraw from "../../img/undraw.png";

library.add(fas);

class Data extends Component {
  render() {
    return (
      <div id="page-data">
        <div className="header-menu">
      <div className="menu">
        <nav>
          <Menu />
        </nav>
      </div>
        <div className="logomenu">
          <Logo />
      </div> 
      </div>
        <main id="main-cards">
          <div className="title">
            <h1>BOLETIM EPIDEMIOLÓGICO</h1>
          </div>

          <article>
            <div id="cities">
              <h2>Cidade:</h2>
              <p>
                <a
                  href="https://www.google.com/maps/place/Sousa+-+PB/@-6.7524445,-38.3723728,11z/data=!3m1!4b1!4m5!3m4!1s0x7a4595b2cfc0e75:0xbc77f410fe1dd9f1!8m2!3d-6.7625254!4d-38.224935"
                  target="blank"
                >
                  Sousa{" "}
                  <FontAwesomeIcon className="icon" icon="map-marker-alt" />
                </a>
              </p>
              <div>
                <div className="logo-responsiva-cont">
                </div>
                <p className="texto">
                  Cidade do Estado da Paraíba. Os habitantes se chamam
                  sousenses. O município se estende por 738,5 km² e contava com
                  69 444 habitantes no último censo.A densidade demográfica é de
                  94 habitantes por km² no território do município.
                </p>

                <div className="fonte">
                  <p>
                    Fonte: acesso em 29/06/2020. Disponível em:
                    https://www.cidade-brasil.com.br/municipio-sousa.html
                  </p>
                </div>
              </div>
            </div>

            <div id="dataAtual">
              <h2> Ultima Atualização</h2>
              <h3>
                <DataAtual />
              </h3>
            </div>

            <div id="card-gerais">
              <div id="card1">
                <div id="title-data" className="card-filhos">
                  <div id="card-suspeitos" className="paragrafo-data">
                    <h3> Suspeito</h3>
                    <div className="info">
                      <GeralSuspeitos />
                      <img src={corona1} alt=""></img>
                    </div>
                  </div>
                </div>

                <div id="title-data" className="card-filhos">
                  <div id="card-confirmados" className="paragrafo-data">
                    <h3> Confirmados</h3>
                    <div className="info">
                      <GeralConfirmados />
                      <img src={corona3} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>

              <div id="card2">
                <div id="title-data" className="card-filhos">
                  <div id="card-recuperados" className="paragrafo-data">
                    <h3> Recuperados</h3>
                    <div className="info">
                      <GeralRecuperados />
                      <img src={corona4} alt=""></img>
                    </div>
                  </div>
                </div>

                <div id="title-data" className="card-filhos">
                  <div id="card-obitos" className="paragrafo-data">
                    <h3> Óbitos</h3>
                    <div className="info">
                      <GeralObitos />
                      <img src={corona5} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="confirm">
              <div id="card-confirmado">
                <div className="title-confirm">
                  <h3>Bairros</h3>
                  <h3>Casos Confirmados</h3>
                </div>
                <BairrosConfirm />
              </div>
              <img src={undraw} alt=""></img>
            </div>
          </article>
        </main>
        <div>
          <Rodape />
        </div>
      </div>
    );
  }
}

export default Data;
