import { useEffect, useReducer } from "react";

 interface AuthInterface {
    validando:boolean;
    token: string | null,
    username: string,
    name: string
}

const initialState:AuthInterface = {
    validando:true,
    token: null,
    username:'',
    name:''
}

type LoginPayload = {
    name: string,
    username: string
}

type AuthAction = { type:'logout' } | { type:'login', payload:LoginPayload }

const authReducer = ( state:AuthInterface, action:AuthAction ):AuthInterface=>{

    switch (action.type) {

        case 'logout':            
            return{
                validando : false,
                token: null,
                name:'',
                username:''
            }
        case 'login':
            const { name, username } = action.payload
            return{
                validando:false,
                token:"123bac",
                name,
                username
            }
    
        default:
            return state;
    }

}



const Login = () => {

    const [  { validando, name, username,token } , dispatch ] = useReducer( authReducer, initialState );

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({ type:'logout' })
        },1500)
    },[])

    const login = ()=>{
        dispatch({ type:'login',payload:{
            name:"cesar",
            username:"cpandares"
        } })
    }

    const logout = ()=>{
        dispatch({ type:'logout' })
    }

    if(validando){
        return(
            <>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Autenticando
                </div>
            </>
        )
    }

    return (
        <>
           {
               (token)
               ?
               <div className="alert alert-success"> Autenticado como: { name }</div>
               :
                <div className="alert alert-danger"> NO  Autenticando </div>
           }
            
           {
               (token)
               ?
               (
                <button 
                    className="btn btn-danger"
                    onClick={ logout }
                    >
                    Logout
                </button>
               )
               :
               <button 
                    className="btn btn-primary"
                    onClick={ login }
                    >
                    Login
               </button>
           }
        </>
    );
};

export default Login;