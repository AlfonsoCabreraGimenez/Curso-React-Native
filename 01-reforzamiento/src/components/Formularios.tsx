import {useState} from "react";
import {useForm} from "../hooks/useForm";


export const Formularios = () => {


    const { formulario, email, password, onChange } = useForm({
        email: 'test@text.com',
        password: '123456'
    });

    return (
        <>
            <h3>
                Formularios
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="email"
                value={ email}
                // Des-estructuramos el event que tiene dentro target, por eso es ({target}) = (event.target)
                onChange={ ({target}) => onChange(target.value,  'email')}
                />

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="password"
                value={password}
                onChange={ ({target}) => onChange(target.value, 'password')}

            />

            <code>
                <pre>
                    {JSON.stringify( formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}