export function Input(props){
    return(
        <>
            <input type="text" onChange={props.handleChange} value={props.nome} name={props.tipo}></input>
        </>
    )
}