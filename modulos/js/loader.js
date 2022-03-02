import {d,w} from "./data.js";
/* Crear spin */
export let loaderStyle = ({wh, b,atributo}) => {
    let node=d.querySelector(atributo)
    node.style.border = `${b} solid #ddd`;
    node.style.borderTop = `${b} solid #2583c5`;
    node.style.width = `${wh}`;
    node.style.height = `${wh}`;
    node.style.borderRadius = `50%`;
}
loaderStyle({
    "wh":"150px", 
    "b":"2px",
    "atributo":".spin"
});
w.addEventListener("load", () => {
    if (d.querySelector(".load")) {
        d.querySelector(".load").style.visibility = "hidden";
        d.querySelector(".load").style.opacity = "0";
    }
})