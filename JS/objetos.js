
class misObjetos {
    objeto1 = new Object();
    objeto2 = {};


    objpaz = {
        identificacion: 0,
        nombre: " ",
        estado: " ",
        actividad: " ",
        juego: " ",
        fecha_nacimiento: " ",
        edad: " ",
    };

    datospaz(id, nom, estado, actividad, juego, fecha) {
        alert(id + " " + nom + " " + estado + " " + actividad + " " + juego);
        this.objpaz.identificacion = id;
        this.objpaz.nombre = nom;
        this.objpaz.estado = estado;
        this.objpaz.actividad = actividad;
        this.objpaz.juego = juego;
        this.objpaz.fecha_nacimiento =fecha;
        this.edad(fecha);

        console.log(this.objpaz);
    };

    edad(fecha) {
        var fechas=fecha.split("-")
        var anoo=fechas[0];
        var today = new Date();
        var anos = today.getFullYear() -anoo;
        if (fechas[1]> (today.getMonth()) || fecha.getDay() > today.getDay())
        anos--;
        this.objpaz.edad = `${anos}  años`;
    };
}


var instMisObjetos = new misObjetos();