import { useState } from "react";
import useCounter from '../hooks/useCounter';


const ContadorHook = () => {

   const { valor, sumar } = useCounter(20)
   
    return (
        <>
            <h3>Contador Hook: <span> { valor } </span></h3>

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

export default ContadorHook;