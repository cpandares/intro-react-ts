import { useState } from "react";


const Contador = () => {

    const [ valor, setValor ] = useState(0)

    const sumar = (numero:number)=>{
        setValor(valor + numero)
    }
   
    return (
        <>
            <h3>Contador: <span> { valor } </span></h3>

            <button 
                onClick={ ()=>sumar(1) }
                className="btn btn-info">
                +1
            </button>
            &nbsp;
            <button 
                className="btn btn-info"
                onClick={ ()=>sumar(-1) }
                >
                -1
            </button>
        </>
    );
};

export default Contador;