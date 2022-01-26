import { useState } from "react";


const useForm = <T extends Object >( formulario : T ) => {

    const [ formValues, setFormValues ] = useState(formulario)

    const onChange = ( value:string, campo: keyof T )=>{

        setFormValues({
            ...formValues,
            [campo]:value
        })
    }   

    return{
        ...formValues,
        formValues,
        onChange
    }
};

export default useForm;