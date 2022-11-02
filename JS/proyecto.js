// validamos el formulario de anuncios a los clientes
(function () {
    'use strict'

    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')

    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


class tramo {
    TblAdministradorTramo = {
        IdAdministrador: 0,
        NombreAdministrador: "",
        ContrasenaAdministrador: "",
        CorreoAdministrador: "",
        NumeroTelefonoAdministrador: 0
    };


    fnSetDatosTramoAdministrador(IdAdministrador, NombreAdministrador, ContrasenaAdministrador, CorreoAdministrador, NumeroTelefonoAdministrador) {
        this.TblAdministradorTramo.IdAdministrador = IdAdministrador;
        this.TblAdministradorTramo.NombreAdministrador = NombreAdministrador;
        this.TblAdministradorTramo.ContrasenaAdministrador = ContrasenaAdministrador;
        this.TblAdministradorTramo.CorreoAdministrador = CorreoAdministrador;
        this.TblAdministradorTramo.NumeroTelefonoAdministrador = NumeroTelefonoAdministrador;

        this.fnOpciones(this.TblAdministradorTramo);
        console.table(this.TblAdministradorTramo);

    };


    fnOpciones(contenido) {
        const btn_trabajo = document.getElementById('btn-enviar');
        const btn_reset = document.getElementById('reset');
        
        const tabla = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');

        tabla.className = "table table-dark bg-dark";

        
        console.log(contenido);


        ["identificacion", "Nombre Administrador", "Contrasena Administrador", "Correo Administrador","telefono Administrador"].forEach(function (e) {
            var th = document.createElement('th');
            th.textContent = e;
            tabla.appendChild(thead);
            thead.appendChild(th);
        });
        tabla.appendChild(tbody);
        tbody.appendChild(tr);
        var i=0;

        Object.entries(contenido).forEach(([key, value])=>{
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
            tbody.appendChild(tr);
            btn_trabajo.style = "display:none";
            btn_reset.style = "display:none";

        })

        document.getElementById("tablas").appendChild(tabla)
        document.getElementById('form').innerHTML = '<button id="btn-agregar" class="btn btn-primary mb-3" onclick="InsTramoAdministrador.fnAgregar(txtIdAdministrador.value,txtIdNombreAdministrador.value,txtIdContrasenaAdministrador.value,txtIdCorreoAdministrador.value,txtIdNumeroTelefonoAdministrador.value)">Agregar Contenido</button>'+'<input type="reset" value="Limpiar Datos" class="btn btn-warning btn-md m-3 clBtnFrmAdministrador" id="reset">';

        this.fnAgregar(this.TblAdministradorTramo,tabla);


        


    };
/* falta por hacer */
    fnAgregar(tabla){
        this.TblAdministradorTramo.IdAdministrador = IdAdministrador;
        this.TblAdministradorTramo.NombreAdministrador = NombreAdministrador;
        this.TblAdministradorTramo.ContrasenaAdministrador = ContrasenaAdministrador;
        this.TblAdministradorTramo.CorreoAdministrador = CorreoAdministrador;
        this.TblAdministradorTramo.NumeroTelefonoAdministrador = NumeroTelefonoAdministrador;
      
      
            const tr = document.createElement('tr');
            tabla.appendChild(tr);
        
            Object.entries(this.TblAdministradorTramo).forEach(([key, value])=>{
              const td = document.createElement('td');
              td.textContent = value;
              tr.appendChild(td)
              tbody.appendChild(tr);
            })
        
        };

}

const InsTramoAdministrador = new tramo();
