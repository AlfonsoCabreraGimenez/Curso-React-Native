import React from "react";
import { useState } from "react";
import {useCounter} from "../hooks/useCounter";

export const Contador = () => {

    const {valor, acumular} = useCounter(10);

    return (
        <div>
            <h2>Contador con Hooks: <small>{ valor }</small></h2>

            <button
                className="btn btn-primary"
                onClick={ () => acumular(1)}>
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => acumular(-1)}>
                -1
            </button>
        </div>
    )
}