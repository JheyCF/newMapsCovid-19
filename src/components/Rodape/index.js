import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "./styles.css"

library.add(fas);

function Rodape (){
    return (
        <div id="rodape">
           <div id="rodape1">
               <div id="rodapeP1">
                    <h4 className="titulocontato">Contate-nos:</h4>
                    <a href="mailto:mapscovid19@gmail.com?"> Email</a>
                    <a href="https://www.instagram.com/jheycf/"> Instagran</a>
                    <a href="http://www.facebook.com/112855440470064/"> Facebook</a>
                </div>
                <div id="rodapeP2">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2aj1PYksC1_0_G4RRk_ii6Pe-EuIQQEmZFxiWweH6tR4HYw/viewform?usp=pp_url" className="forms"><p> Gostou!? Solicite o cadastro de sua cidade </p> </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2aj1PYksC1_0_G4RRk_ii6Pe-EuIQQEmZFxiWweH6tR4HYw/viewform?usp=pp_url" target="blank"><FontAwesomeIcon className="fass" icon="arrow-down" /></a> 
                </div>
                <div id="rodapeP3">
                    <img src={require('./logorodape.png')} />
                    <div id="vlibras"> 
                        <a href="https://www.vlibras.gov.br/" target="blank">
                        <img src= {require('./libras.png')} /> </a>
                    </div>
                    
                </div>
            </div>
           <div id="rodape2">
                <p>mapscovid.vercel.app</p>
                <p><FontAwesomeIcon  icon="copyright" />Todos os direitos reservados. 2020 | Desenvolvido por JheyCF</p> 
           </div>
        </div>
    );
}
export default Rodape; 