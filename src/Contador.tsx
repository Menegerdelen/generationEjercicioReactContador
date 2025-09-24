import { useContador } from "./Hooks/CustomHooks/useContador"


export const Contador = () => {

    const [ contador, incrementar, decrementar, reiniciar ] = useContador({ valor: 0 })
    
    return (
        <div className="text-center">
            <h1 className="fw-bold">Contador: { contador }</h1>
            <div className="d-flex justify-content-center gap-4 my-5">

                <button onClick={ incrementar }
                className="btn btn-primary">Incrementar</button>

                <button onClick={ decrementar }
                className="btn btn-danger">Decrementar</button>

                <button onClick={ reiniciar }
                className="btn btn-success">Reiniciar</button>

            </div>
        </div>
    )
}
