 import React from 'react'
import {Usuario} from "../interfaces/reqRes";
import {useUsuarios} from "../hooks/useUsuarios";

export const Usuarios = () => {

    const {usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return(
            <>
                <tr key={id.toString()}>
                    <td><img src={avatar} alt={first_name}  style={{width: 35, borderRadius:100}}/></td>
                    <td>{first_name} {last_name}</td>
                    <td>{email}</td>
                </tr>
            </>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatares de user</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                {
                    usuarios.map( renderItem )
                }
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={ paginaSiguiente }>Siguiente</button>

            <button className="btn btn-primary" onClick={ paginaAnterior }>Anterior</button>
        </>
    )


}