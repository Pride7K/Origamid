import React from "react"
import { GlobalContext } from "../GlobalContext/GlobalContext"


export default function Produtos() {
    const global = React.useContext(GlobalContext)

    React.useEffect(() => {
        console.log(global.produtos)
    }, [global.produtos])

    return (
        <div>
            <button onClick={() => global.LoadProducts()}> Carregar dados</button>
            <button onClick={() => global.limparDados()}> Limpar dados</button>
        </div>
    )
}