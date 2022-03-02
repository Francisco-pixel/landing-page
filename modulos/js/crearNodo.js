import {d} from "./data.js"
/* Crear nodo */
export {crearNodo};
let crearNodo = ({element, setAtribute, atribute}) => {
    let node = d.createElement(`${element}`);
    node.setAttribute(atribute, `${setAtribute}`);
    d.body.appendChild(node);
}
crearNodo({
    "element":"div",
    "setAtribute":"load",
    "atribute":"class"
})
crearNodo({
    "element":"div",
    "setAtribute":"btn",
    "atribute":"class"
})
crearNodo({
    "element":"p",
    "setAtribute":"text",
    "atribute":"class"
})
crearNodo({
    "element":"div",
    "setAtribute":"btn-subir ocultar--btn",
    "atribute":"class"
})
crearNodo({
    "element":"div",
    "setAtribute":"conexion",
    "atribute":"class"
})
crearNodo({
    "element":"div", 
    "setAtribute":"spin",
    "atribute":"class"
})
