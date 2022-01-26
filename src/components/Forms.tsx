
import useForm from '../hooks/useForm';

const Forms = () => {

    const { formValues, onChange } = useForm({
        email:'cesar@cesar',
        password:'123'
    })

    return (
        <>

            <h3>Formularios</h3>

            <input 
                type="text"
                className="form-control"
                placeholder="email"
                onChange={ ({ target })=>onChange( target.value,'email' ) }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="password"
                onChange={ ({ target })=>onChange( target.value,'password' ) }
            />

            {
                <code>
                    <pre>
                        { JSON.stringify(formValues,null,2) }
                    </pre>
                </code>
            }
            
        </>
    );
};

export default Forms;