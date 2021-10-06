import { Footer } from "../Footer";

export function paginaDefault(props){
    return(<>
        {props.children}
        <Footer></Footer>
        </>
    )
}