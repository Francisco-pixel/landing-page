import { d, w } from "./data.js";
export { btnUp, btnUpStyle }
/* Botón para subir */
let btnUp = () => {
    if (d.querySelector(".btn-subir")) {
        let btn_subir = d.querySelector(".btn-subir");
        btn_subir.classList.add("btn-subir")
        /* Aparece y desaparece el boton */
        w.addEventListener("scroll", () => {
            if (d.documentElement.scrollTop > 200) {
                btn_subir.classList.remove("ocultar--btn");
            } else {
                btn_subir.classList.add("ocultar--btn");
            }
        });
        /* Sube el boton */
        btn_subir.addEventListener("click", () => {
            w.scrollTo({
                top: 0,
                behaivor: "smooth"
            });
        });
    }
}
let btnUpStyle = ({element, bg, wh}) => {
    if (d.querySelector(`${element}`)) {
        let btn = d.querySelector(`${element}`);
        btn.style.background = bg;
        btn.style.width = `${wh}`;
        btn.style.height = `${wh}`;
    }
}
btnUpStyle({
    "element":".btn-subir",
    "bg":"#2f6574",
    "wh":"50px"
})