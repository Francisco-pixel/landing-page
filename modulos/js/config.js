import { d } from "./data.js";
import { conexionInternet } from "./conexionInternet.js";
import { tiempo } from "./fecha.js";
import { crearNodo } from "./crearNodo.js";
import { loaderStyle } from "./loader.js";
import { padreHijo } from "./padreHijo.js";
import { setText } from "./setText.js";
import { btnUp } from "./botonSubir.js";
import { copiarText } from "./copiarText.js";
conexionInternet()
btnUp()
tiempo()
copiarText()