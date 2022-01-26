import { useEffect, useRef, useState } from "react";
import { Request } from "../api/Request";
import { ReqResListado, User } from "../interfaces/reqResListado";


const useUsuarios = () => {

    const [ users, setUsers ] = useState<User[]>([]);
    const paginaRef = useRef(1)

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async()=>{
        
        const resp = await Request.get<ReqResListado>('/users',{
            params:{
                page: paginaRef.current
            }
        });    

        if(resp.data.data.length > 0){
            setUsers(resp.data.data)
           
        }else{
            paginaRef.current--
            alert("No hay mas")
        }
        
    }

    const paginaSiguiente = ()=>{
        paginaRef.current++
        getUsers()
    }

    const paginaAnterior = ()=>{
        if(paginaRef.current > 1){
            paginaRef.current --;
            getUsers();
        }
    }

    return{
        users,
        paginaSiguiente,
        paginaAnterior
        
    }
   
};

export default useUsuarios;