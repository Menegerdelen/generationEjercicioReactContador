

import { useState } from "react"

type UseContadorReturn = [
    number,
    () => void,
    () => void,
    () => void
];


export const useContador = ( { valor }:  { valor: number }  ): UseContadorReturn => {

    const [ contador, setContador ] = useState( valor )

    const incrementar = () => setContador( contador + 1 )
    const decrementar = () => setContador( contador - 1  )
    const reiniciar = () => setContador( valor )


    return [ contador, incrementar, decrementar, reiniciar ]

}