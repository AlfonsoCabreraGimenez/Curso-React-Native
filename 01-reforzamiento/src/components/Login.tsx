import React from "react";
import {useReducer, useEffect} from 'react';

 interface AuthState {
    validacion: boolean;
    token: string | null;
    userName: string;
    nombre: string;
}
type LoginPayload = { username: string, nombre: string}

type AuthAction = { type: 'logout' } | {type: 'login', payload: LoginPayload}

const initialState: AuthState = {
    validacion: true,
    token: null,
    userName: '',
    nombre: '',

}

const authReducer  = (state: AuthState, accion: AuthAction): AuthState => {

     //React sabe que las acciones tienen una propeidad que es type.
     switch(accion.type){

         case 'logout':
             return {
                 validacion: false,
                 token: null,
                 userName: '',
                 nombre: '',
             }
             break;

         case 'login':
             const {nombre, username} = accion.payload
             return {
                 validacion: false,
                 token: 'ACG',
                 userName: username,
                 nombre: nombre,
             }
         default:
             return state;
     }
}


export const Login = () => {

    const [{validacion, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    /*
        useEffects -> Se ejecuta cuando se renderiza el componente y a menos que pongamos algo en el deps (dependencias)
        no se ejecutará más
     */
    //Se utiliza para disparar aciones
    //En el apartado deps, al tener un cambio ese objeto se vuelve a disparar
    useEffect(() => {
        setTimeout(() => {
    dispatch({type: 'logout'})
        }, 1500)
    }, []);

    const login = () => {
        dispatch(
            {type: 'login',
                payload: {
                    nombre:'Alfonso',
                    username:'Cabrera'
                }
            })
    }

    const logout = () => {
        dispatch( {
            type: 'logout'
        } )

    }


    //Aquí vemos que dependiendo del state sacamos un resultado y otro
    if(validacion){
        return(
            <>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
            )

    }

    return (
        <>
        <h2>Login</h2>
            {
                (token ? <div className="alert alert-success"> Autenticado como: {nombre}</div>
                : <div className="alert alert-danger"> No autenticado</div>
                )
            }

            {
                (token
                    ?
                    <button
                        className="btn btn-danger"
                    onClick={() => logout()}>
                        Logout
                    </button>
                     :
                    <button
                        className="btn btn-primary"
                    onClick={() => login()}>
                        Login
                    </button>
                )
            }
        </>

    )
}