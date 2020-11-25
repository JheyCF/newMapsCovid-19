import React from "react";

import Previnir from "../../components/Menu/cuidados";

import "./style.css";

function Cuidados() {
  return (
    <div className="page-cuidados">
      <div className="todo-menu">
        <nav>
          <Previnir />{" "}
        </nav>
      </div>

      <div className="todo-title">
        <h1>Covid-19</h1>
      </div>

      <div className="todo-card-cima">
        <div className="cards-internos">
          <div className="primeira-linha-esquerda">
            <div className="text-card">
              <h3>O que é?</h3>
              <p>
                A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que
                apresenta um quadro clínico que varia de infecções
                assintomáticas a quadros respiratórios graves. De acordo com a
                Organização Mundial de Saúde (OMS), a maioria dos pacientes com
                COVID-19 (cerca de 80%) podem ser assintomáticos e cerca de 20%
                dos casos podem requerer atendimento hospitalar por apresentarem
                dificuldade respiratória e desses casos aproximadamente 5% podem
                necessitar de suporte para o tratamento de insuficiência
                respiratória (suporte ventilatório).
              </p>
            </div>
          </div>

          <div className="primeira-linha-direita">
            <div className="text-card">
              <h3>Como é transmitido?</h3>
              <h4>
                A transmissão acontece de uma pessoa doente para outra ou por
                contato próximo por meio de:
              </h4>
              <ul>
                <li>Toque do aperto de mão;</li>
                <li>Gotículas de saliva;</li>
                <li>Espirro;</li>
                <li>Tosse;</li>
                <li>Catarro;</li>
                <li>
                  Objetos ou superfícies contaminadas, como celulares, mesas,
                  maçanetas, brinquedos, teclados de computador etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="todo-card-baixo">
        <div className="cards-internos-segunda">
          <div id="segunda-linha-esquerda" className="sub-card-esquerda">
            <div className="text-card" id="card4">
              <h3>Como se previnir?</h3>
              <h4>
                As recomendações de prevenção à COVID-19 são as seguintes:
              </h4>
              <ul>
                <li>
                  Lave com frequência as mãos até a altura dos punhos, com água
                  e sabão, ou então higienize com álcool em gel 70%.
                </li>
                <li>
                  Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o
                  braço, e não com as mãos.
                </li>
                <li>
                  Evite tocar olhos, nariz e boca com as mãos não lavadas.
                </li>
                <li>
                  Mantenha uma distância mínima de cerca de 2 metros de qualquer
                  pessoa tossindo ou espirrando.
                </li>
                <li>
                  Higienize com frequência o celular e os brinquedos das
                  crianças.
                </li>
                <li>Mantenha os ambientes limpos e bem ventilados.</li>
                <li>
                  Evite circulação desnecessária nas ruas, estádios, teatros,
                  shoppings, shows, cinemas e igrejas. Se puder, fique em casa.
                </li>
                <li>
                  Se estiver doente, evite contato físico com outras pessoas,
                  principalmente idosos e doentes crônicos, e fique em casa até
                  melhorar.
                </li>
                <li>
                  Utilize máscaras caseiras ou artesanais feitas de tecido em
                  situações de saída de sua residência.
                </li>
              </ul>
            </div>
          </div>
          <div id="segunda-linha-direita" className="sub-card-direita">
            <div className="text-card" >
              <h3>Quais são os sintomas</h3>
              <h4>
                Os sintomas da COVID-19 podem variar de um simples resfriado até
                uma pneumonia severa. Sendo os sintomas mais comuns:
              </h4>
              <ul>
                <li>Tosse</li>
                <li>Febre</li>
                <li>Coriza</li>
                <li>Dor de garganta</li>
                <li>Dificuldade para respirar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Cuidados;
