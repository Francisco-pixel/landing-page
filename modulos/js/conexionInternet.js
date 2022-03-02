import {d,w} from "./data.js";

export let conexionInternet = () => {
    /*Alerta de conexión*/
    let conex = ({atributo,msn, color, sh}) => {
        let conexion=d.querySelector(atributo);
        conexion.innerHTML = `${msn}`;
        conexion.style.top = "0%";
        conexion.style.color = `${color}`;
        conexion.style.textShadow = `${sh}`;
        conexion.style.background = `#343434`;
        conexion.style.padding = `1rem`;
        conexion.style.textAlign = `center`;
        conexion.style.position = `absolute`;
        conexion.style.top = `0`;
        conexion.style.transition = `all 0.5s ease`;
        conexion.style.width = `100%`;
        conexion.style.zIndex = `2`;
        setTimeout(() => {
            conexion.style.top = `-100%`;
            conexion.style.color = ``;
            conexion.style.textShadow = ``;
            conexion.style.background = ``;
        }, 3000);
    }
    w.addEventListener("online", () => {
        conex({
            "atributo":".conexion",
            "msn":"Conexion Establecida", 
            "color":"#73ff7e", 
            "sh":"0 0 5px #37ff04,0 0 20px #37ff04"
        });
    });
    w.addEventListener("offline", () => {
        conex({
            "atributo":".conexion",
            "msn":"Se fue la conexion a internet", 
            "color":"#666"
        });
    });
};