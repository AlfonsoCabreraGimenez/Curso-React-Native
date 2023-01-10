import {useEffect, useRef, useState} from "react";
import {ReqResListado, Usuario} from "../interfaces/reqRes";
import {reqResApi} from "../api/reqRes";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    let paginaRef = useRef(1);

    useEffect(() => {
       return () => {
           cargarUsuarios();
       }
    }, []);



    const cargarUsuarios = async() => {
        //llamamos a la API, podemos hacerlo mediante un fetch o por axios
        const rest = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });

        if (rest.data.data.length > 0) {
            setUsuarios(rest.data.data);
          //  paginaRef.current ++;
        } else {
            paginaRef.current --;
            alert('No hay más registros');
        }

    }

    const paginaSiguiente = () => {
        if(paginaRef.current != 3){
            paginaRef.current ++;
            cargarUsuarios();
        }

    }

    const paginaAnterior = () => {
        if(paginaRef.current >= 2){
            paginaRef.current --;
            cargarUsuarios();
        }
    }



    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}