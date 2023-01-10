import {useState} from "react";


export const useForm = <T extends Object>(formulario: T) => {

    const [state, setState] = useState(formulario);

    // keyof significa que campo debe de ser una key del objeto T, que en este caso es Formulario
    const onChange = (value: string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value,
        })

    }

    return {
        ...state,
        formulario: state,
        onChange,
    }

}


