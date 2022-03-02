import {d} from "./data.js"
export {padreHijo}
let padreHijo = ({p, h}) => {
    d.querySelector(p).appendChild(d.querySelector(h))
}
padreHijo({
    "p":".load", 
    "h":".spin"
})
padreHijo({
    "p":".load", 
    "h":".text"
})