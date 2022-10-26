
class misObjetos{
    objeto1=new Object();
    objeto2={};


    objpaz={
        indentificacion:0,
        nombre:" ",
        estado:" ",
        actividad:" ",
        juego:" "
    };

    datospaz(id,nom,estado,actividad,juego) {
        alert(id+" "+nom+" "+estado+" "+actividad+" "+juego);
    };

}


var instMisObjetos = new misObjetos();