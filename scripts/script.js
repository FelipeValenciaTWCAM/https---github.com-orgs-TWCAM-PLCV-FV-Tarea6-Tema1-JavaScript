function functCheck(evento){
    let valores = document.getElementsByName('mi_check');
    let contador = 0;
    for(i=0;i<valores.length; i++){
        if(valores[i].checked){
            contador++;
        }
        if(contador>3){
            evento.target.checked = false;
        }
    }

    if (contador>0){
        document.getElementById("boton").disabled = false;
    }else{
        document.getElementById("boton").disabled = true;
    }
}

function functCheck2(evento){
    let valores = document.getElementsByName('mi_check');
    let activos = Array.from(valores).filter(function(valor){
        return valor.checked;
    });

    if(activos.length>3){
        evento.target.checked = false;
        if (activos.length>0){
            document.getElementById("boton").disabled = false;
        }else{
            document.getElementById("boton").disabled = true;
        }
    }
}

function selects(opc){
    let todos = 1;
    switch(opc){
        case 1:
            todos = 0;
        case 2:
            emisor= document.getElementById("select_izq");
            receptor= document.getElementById("select_der");
            break;
        case 4:
                todos = 0;
        case 3:
            emisor= document.getElementById("select_der");
            receptor= document.getElementById("select_izq");
            break;
        
    }

    if(emisor.options.length <0) return ;
    
    if(todos == 0){
        if(emisor.selectedIndex < 0) return;
        receptor.options[receptor.options.length] = emisor.options[emisor.selectedIndex]
    }
    else while (emisor.options.length>0){
        receptor.options[receptor.options.length] = emisor.options[0]
    }

    emisor.selectedIndex = -1;
    receptor.selectedIndex = -1;
}

function comprobar_obligatorio(){
    obligatorios = document.querySelectorAll("#form_obl .obl");
    for (let i=0; i<obligatorios.length; i++){
        obligatorios[i].style.removeProperty("border-color");
        if (obligatorios[i].value == ""){
            obligatorios[i].style.setProperty("border-color","#ff0000")
        }
    }
}

function resaltar2(value){
    value.style.fontWeight="bold";
}

function desresaltar2(value){
    value.style.fontWeight="normal";
}

function cajas (elem, value){
    if(elem == "M"){
        document.querySelector(".caja").style.setProperty("margin",value+"px");
    }

    if(elem == "B"){
        document.querySelector(".caja").style.setProperty("border",value+"px solid black");
    }

    if(elem == "P"){
        document.querySelector(".caja").style.setProperty("padding",value+"px");
    }
}

function cambiafilaimpar(valor){
    filas = document.querySelectorAll(".zebraStripe tr:nth-of-type(odd) td");
    for (i=0;i<filas.length;i++){
        filas[i].style.setProperty("background", valor);
    }
}

function cambiafilapar(valor){
    filas = document.querySelectorAll(".zebraStripe tr:nth-of-type(even) td");
    for (i=0;i<filas.length;i++){
        filas[i].style.setProperty("background", valor);
    }
}

function addTexto(){
    let texto = document.getElementById("texto").value
    let p = document.createElement("p");
    let texto_p = document.createTextNode(texto);
    p.appendChild(texto_p);

    //p.innerHTML = "<div> <p>"+texto+"</p></div>";

    document.getElementById("pegar").appendChild(p)
}

function test(){
    let carrito = [];
    let obj = new Object();
    obj.nombre="Nombre";
    obj.precio="Precio";
    carrito[0]=obj;
}