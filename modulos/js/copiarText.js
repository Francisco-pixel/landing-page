import { alerta } from "./alerta.js";
import { d } from "./data.js";
export let copiarText = () => {
    d.addEventListener("click", e => {
        if (e.target.matches(".copiar")) {
            let input = d.createElement("input");
            d.body.appendChild(input)
            input.setAttribute("value", e.target.innerText)
            input.select();
            d.execCommand("copy")
            d.body.removeChild(input);
            alerta({
                "atributo": ".conexion",
                "msn": `"Texto copiado en el portapapeles"`,
                "color": "#fff",
                "bg": "#343434"
            });
        }

    })

}