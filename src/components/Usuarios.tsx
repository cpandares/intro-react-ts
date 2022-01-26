
import {  User } from "../interfaces/reqResListado";
import useUsuarios from '../hooks/useUsuarios';

const Usuarios = () => {

    const { users, paginaSiguiente, paginaAnterior } = useUsuarios()

    const renderItem = ( { first_name,email,avatar,id }:User )=>{
       return(
        <tr key = { id.toString() }>
            <td>
                <img 
                    src={ avatar } 
                    alt={ first_name }
                    style={{
                        width:30,
                        borderRadius:100
                    }}
                /> 
            </td>
            <td>
                { first_name }
            </td>
            <td>
                { email }
            </td>
        </tr>
       )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                   { users.map( renderItem ) }
                </tbody>
            </table>
            <button 
                className="btn btn-primary"
                onClick={ paginaAnterior }
                >
                Anteriores
            </button>
            &nbsp;
            <button 
                className="btn btn-primary"
                onClick={ paginaSiguiente }
                >
                Siguiente
            </button>
        </>
    );
};

export default Usuarios;