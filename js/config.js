import { c, d } from "https://francisco-pixel.github.io/modulos/js/data.js";
import { conexionInternet } from "https://francisco-pixel.github.io/modulos/js/conexionInternet.js";
import { tiempo } from "https://francisco-pixel.github.io/modulos/js/fecha.js";
import { crearNodo } from "https://francisco-pixel.github.io/modulos/js/crearNodo.js";
import { loaderStyle } from "https://francisco-pixel.github.io/modulos/js/loader.js";
import { padreHijo } from "https://francisco-pixel.github.io/modulos/js/padreHijo.js";
import { setText } from "https://francisco-pixel.github.io/modulos/js/setText.js";
import { btnUp,btnUpStyle } from "https://francisco-pixel.github.io/modulos/js/botonSubir.js";
import { copiarText } from "https://francisco-pixel.github.io/modulos/js/copiarText.js";
conexionInternet()
btnUp()
tiempo()
copiarText()
btnUpStyle({
    "element":".btn-subir",
    "bg":"#ffb311",
    "wh":"50px"
})
let menu=["inicio","contacto"],
id=["#","#contacto"],
thumbImg=[
    {"clase":"flex--align-center span-2","img":"./img/img0.png","bg":"#c6b85d"},
    {"clase":"flex--align-center span-2","img":"./img/img1.png","bg":"#946c64"},
    {"clase":"flex--align-center span-2 thumb--span-2","img":"./img/img2.png","bg":"#dd566b"}
];
/* Menú */
menu.forEach((item,i)=>{
    d.querySelector(".header__ul").innerHTML+=`
    <li class="header__li">
        <a href="${id[i]}" class="header__li-a">${item}</a>
    </li>
    `;
})
/* Thumb img */
thumbImg.forEach(item=>{
    let {clase,img,bg}=item;
    d.querySelector(".thumb").innerHTML+=`
    <div class="thumb__box ${clase}">
        <div class="thumb__shadow">
            <img src="${img}" alt="Imagen Thumb" class="thumb__box-img" data-bg="${bg}" data-img="${img}">
        </div>
    </div>
    `;
})
d.querySelector(".thumb__box-img").classList.add("saltar")
d.querySelector(".thumb__shadow").classList.add("saltar")
d.addEventListener("click",e=>{
    if(e.target.matches(".header__btn")){
        e.target.classList.toggle("activo");
        d.querySelector(".header__ul").classList.toggle("mostrar_menu");
    }
    if(e.target.matches(".thumb__box-img")){
        let {bg,img}=e.target.dataset;
        d.querySelector(".thumb__box-img.saltar").classList.remove("saltar");
        d.querySelector(".thumb__shadow.saltar").classList.remove("saltar")
        e.target.parentElement.classList.add("saltar")
        e.target.classList.add("saltar");
        d.querySelector(".circle").style.background=bg;
        d.querySelector(".circle2").style.background=bg;
        d.querySelector(".info__img-main").src=img;
    }
    if(e.target.matches(".enviar")){
        e.preventDefault();
    }
})