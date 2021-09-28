import "./stylesInput.css";
import { BiSearchAlt2 } from 'react-icons/bi';

export function CaixaDeTextoLateralDireita() {
    return (
        <div classeName="conteiner">

            < div className="nome"><h1>
                Nome da Pessoa
                </h1></div>


            <div className="texto">
                <h1>Paragrafo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare cursus nulla. Nulla vestibulum sollicitudin
                enim nec aliquam. Suspendisse pretium congue volutpat. Quisque vitae sollicitudin lorem. Morbi feugiat nisi ut lectus
                ultrices convallis. Nullam maximus, nunc ut viverra iaculis, justo enim dignissim ex, sed finibus augue dolor a magna.
                Cras lacus turpis, bibendum sit amet semper ut, cursus nec felis. Donec vitae porttitor enim. Nullam imperdiet, est ut imperdiet
                viverra, magna nulla vestibulum turpis, pulvinar commodo dolor erat sit amet nunc. Maecenas ultrices leo justo, eu dignissim dolor
                tincidunt nec. Phasellus sit amet ipsum fringilla, eleifend eros a, aliquet mi. Pellentesque velit sapien, venenatis quis porttitor nec, tincidunt a elit.

                Sed sed justo risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse consectetur, odio
                et efficitur venenatis, arcu lorem feugiat sapien, eu dapibus augue lectus eget est. Fusce pretium laoreet sem a ultrices. Mauris id urna
                vel ipsum lobortis ultrices vel ut mi. Integer pharetra ut massa id vehicula. Pellentesque vitae dui ut velit blandit vestibulum tincidunt et risus.

            </p>
            </div>
            <div className = "LupaProcurra">
            <i aria-hidden="true" className ="LupaMessagem" ><BiSearchAlt2/></i> <input type="text" value="Digite sua Mensagem" className="inputMensagem" />
            </div>
        </div>
    )
}