import {d} from "./data.js";
export {setText}
let setText=({p,text})=>{
    if(d.querySelector(p)){
        d.querySelector(p).innerHTML=text;
    }
}
setText({
    "p":".text",
    "text":"Please wait a minute don`t close to window"
})
setText({
    "p":".btn-subir",
    "text":`<i class="fas fa-chevron-up up"></i>`
})