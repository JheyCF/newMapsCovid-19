import React from "react";

import Menu from "../../components/Menu/sobre";

import Rodape from "../../components/Rodape";

import "./styles.css";

function Sobre() {
  return (
    <div id="pagesobre">
      <div className="menu">
        <nav>
          <Menu />
        </nav>
      </div>
      <main id="mainsobre">
        <article>
          <div className="tituloSobre">
            <h1>Quem somos?</h1>
          </div>
          <div className="cardsobre">
            <p className="textsobre">
              O site MapsCovid-19 foi desenvolvido pela equipe JheyCF (composta
              por Camila Casimiro, Jennifer Silva e Fagne Farias) para uma
              maratona de programação do IFPB campus Soledade.
            </p>
            <p className="textsobre">
              A plataforma MapsCovid-19 tem como missão, contribuir juntamente
              com a Secretaria de Saúde auxiliando a população na divulgação de
              informações referentes aos casos do novo coronavírus, mantendo as
              pessoas informadas em tempo real com dados oficiais da secretaria
              de saude do municipio, exibindo os dados epidemiológicos gerais
              além dos bairros onde possuem ocorrências de casos de Covid-19,
              dessa forma alertando a população de possíveis locais com foco da
              doença para que eles possam evitar a circulação nesses locais.
            </p>
            <p className="textsobre">
              Como objetivo futuro pretendemos expandir nossa plataforma para
              que outras cidades possam se cadastrar como também pretendemos
              adicionar gráficos para melhorar a exibição dos dados
            </p>
          </div>
        </article>
      </main>

      <div id="rodape-sobre">
        <Rodape />
      </div>
    </div>
  );
}

export default Sobre;
