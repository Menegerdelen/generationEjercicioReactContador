

import { useState } from "react"


export const useContador = ( { valor }:  { valor: number }  ) => {

    const [ contador, setContador ] = useState( valor )

    const incrementar = () => setContador( contador + 1 )
    const decrementar = () => setContador( contador - 1  )
    const reiniciar = () => setContador( valor )


    return [ contador, incrementar, decrementar, reiniciar ]

}