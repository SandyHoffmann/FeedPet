export function VerificarErros(erros){
    let inputs = document.querySelectorAll('.form-err')
    for (let input of inputs){
        let pExistentes = input.querySelectorAll('p')
        if (pExistentes) {
            for (let p of pExistentes){
                input.removeChild(p)

            }
        }
    }   
    console.log(erros)

    for (let err of erros.errors){
        console.log(err.param)
        let elementoAdc = document.querySelector('.'+err.param+'-err')
        if (elementoAdc){
            console.log("encontrou")
            let p = document.createElement("p")
            p.innerHTML = err.msg
            p.className = 'err'
            elementoAdc.appendChild(p)
        }
    }

}