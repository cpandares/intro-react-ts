import { useState } from "react";


const useCounter = ( initial:number = 5 ) => {

    const [ valor, setValor ] = useState(initial)

    const sumar = (numero:number)=>{
        setValor(valor + numero)
    }

    return {
        valor,
        sumar
    }
};

export default useCounter;