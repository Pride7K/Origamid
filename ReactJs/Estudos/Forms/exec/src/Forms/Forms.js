import React from "react"


export default function Forms() {
    const [form, setForm] = React.useState({
        nome: "",
        email: "",
        senha: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""
    })

    function handleChange(event) {
        setForm({ ...form, [event.target.id]: event.target.value });
        console.log("caiu")
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("caiu")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{
                display: "inline-block", margin: "0 auto",
                border: "3px solid black", padding: "15px"
            }}>
                <h1>Formulário</h1>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="" id="nome" value={form.nome} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" value={form.email} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="" id="senha" value={form.senha} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="cep">Cep</label>
                    <input type="text" name="" id="cep" value={form.cep} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="rua">Rua</label>
                    <input type="text" name="" id="rua" value={form.rua} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="numero">Numero</label>
                    <input type="text" name="" id="numero" value={form.numero} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" name="" id="bairro" value={form.bairro} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="" id="cidade" value={form.cidade} onChange={handleChange} />
                </div>
                <br />
                <div style={{ display: "block" }}>
                    <label htmlFor="estado">Estado</label>
                    <input type="text" name="" id="estado" value={form.estado} onChange={handleChange} />
                </div>
                <br />
                <button type="submit">Criar usúario</button>
            </form>
            <div>
                {form.nome}
                {form.email}
                {form.senha}
                {form.cep}
                {form.rua}
                {form.numero}
                {form.bairro}
                {form.cidade}
                {form.estado}
            </div>
        </div>
    )
}