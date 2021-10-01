export function VerificarErros(erros){
    let inputs = document.querySelectorAll('.form-err')
    for (let input of inputs){
        let pExistentes = input.querySelector('p')
        if (pExistentes) input.removeChild(pExistentes)
    }

    for (let err of erros.errors){
        let elementoAdc = document.querySelector('.'+err.param+'-err')
        let p = document.createElement("p")
        p.innerHTML = err.msg
        p.className = 'err'
        elementoAdc.appendChild(p)
    }

}