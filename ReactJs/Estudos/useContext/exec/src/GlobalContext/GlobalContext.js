import React from "react"


export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [produtos, setProdutos] = React.useState(null);

    async function LoadProducts() {
        await fetch("https://ranekapi.origamid.dev/json/api/produto/").then(response => response.json()).then(data => setProdutos(data));
    }

    React.useEffect(() => {
        LoadProducts();
    }, [])

    function limparDados() {
        setProdutos(null);
    }

    return (
        <GlobalContext.Provider value={{ produtos, limparDados, LoadProducts }}>
            {children}
        </GlobalContext.Provider>
    )
}