import "./stylesprincipal.css"
import { SideBarLateralDireita } from "./sideBarLateralDireita"
import {Cards} from "./cards"
export function sideBarLateral() {
    return (
        <div className="conteiner">
            <Cards/>
            <Cards/>
            <Cards/>
            <SideBarLateralDireita />
           
            

        </div>

    )
}