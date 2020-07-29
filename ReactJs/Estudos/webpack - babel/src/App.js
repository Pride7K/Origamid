import React from "react"

export default function App() {
    // <a href="https://www.origamid.com/cursos/">Origamid</a> isto não vai dar certo devido ao babel que não consegue ainda transpilar este código
    //React.createElement("a", { href: "https://www.origamid.com/cursos/", target: "_blank" }, "Origamid")
    return (
        <a href="https://www.origamid.com/cursos/">Origamid</a>
    )
}