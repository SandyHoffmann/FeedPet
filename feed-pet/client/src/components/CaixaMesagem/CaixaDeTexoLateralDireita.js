import "./stylesInput.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export function CaixaDeTextoLateralDireita() {
  return (
    <div classeName="conteiner">
      
        <div className="texto1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ornare cursus nulla. Nulla vestibulum sollicitudin
          </p>
        </div>

        <div className="textoAviso">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ornare cursus nulla. Nulla vestibulum sollicitudin
          </p>
        </div>
      
      <div className="LupaProcurra">
        <input
          type="text"
          value="Digite sua Mensagem"
          className="inputMensagem"
        />
        <i aria-hidden="true" className="LupaMessagem">
          <MdKeyboardArrowRight />
        </i>
      </div>
    </div>
  );
}
