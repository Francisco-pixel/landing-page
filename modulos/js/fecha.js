/* Fecha y hora */
import { d } from "./data.js";
export let tiempo = () => {
    let dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        meses = ["enero", "febrero", "marzo", "abril", "mayo",
            "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        date = new Date(),
        year = date.getFullYear(),
        hora = date.getHours(),
        min = date.getMinutes(),
        seg = date.getSeconds(),
        dtn,
        ampm,
        diaSemana = date.getDay(),
        diaMes = date.getMonth(),
        numDiaMes = date.getDate();
    if (hora >= 12) {
        hora -= 12;
        ampm = "P.M.";
        dtn = "Buenas tardes";
        if (hora > 6) {
            dtn = "Buenas noches";
        }
    } else {
        ampm = "A.M.";
        dtn = "Buenos días";
    }
    (hora == 0) ? hora = 12 : hora;
    (hora < 10) ? hora = `0${hora}` : hora;
    (min < 10) ? min = `0${min}` : min;
    (seg < 10) ? seg = `0${seg}` : seg;

    if (d.querySelector(".fecha")) {
        d.querySelector(".fecha").innerHTML = `${dtn}, hoy es ${dias[diaSemana]} ${numDiaMes} de 
        ${meses[diaMes]} de ${year}, 
        ${hora}:${min}:${seg} ${ampm}`;
    }
}
setInterval(tiempo, 1000);


