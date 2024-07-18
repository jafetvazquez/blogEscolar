

function funcionArea(select){
    var text = select.options[select.selectedIndex].text,
      id = select.value;
    document.getElementById('area_Prog').value =id;
  }

  function soloLetras(e) {
    key = e.keyCode || e.which;
      tecla = String.fromCharCode(key).toString();
      letras = " abcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ.,";//Se define todo el abecedario que se quiere que se muestre.
      especiales = [8, 37, 39, 46, 6, 192, 9, 18, 190, 188]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
  
      tecla_especial = false
      for(var i in especiales) {
          if(key === especiales[i]) {
              tecla_especial = true;
              break;
          }
      }
  
      if(letras.indexOf(tecla) === -1 && !tecla_especial){
          return false;
        }
  }

  function solonumeros(e) {
    key=e.keyCode || e.which;
   
    teclado=String.fromCharCode(key).toLowerCase();
   
  numeros="0123456789";
   
    especiales="8-37-38-46-164";
   
    teclado_especial=true;
   
    for(var i in especiales){
      if(key===especiales[i]){
        teclado_especial=true;
        break;
      }
    }
   
    if(numeros.indexOf(teclado)===-1 && !teclado_especial){
      return false;
    }
  
  }
  
   function limitar(e, contenido, caracteres){
              // obtenemos la tecla pulsada
              var unicode=e.keyCode? e.keyCode : e.charCode;
   
              // Permitimos las siguientes teclas:
              // 8 backspace
              // 46 suprimir
              // 13 enter
              // 9 tabulador
              // 37 izquierda
              // 39 derecha
              // 38 subir
              // 40 bajar
              if(unicode===8 || unicode===46 || unicode===13 || unicode===9 || unicode===37 || unicode===39 || unicode===38 || unicode===40)
                  return true;
   
              // Si ha superado el limite de caracteres devolvemos false
              if(contenido.length>=caracteres)
                  return false;
   
              return true;
  }
  
  function Mayuculas(tx){
    //Retornar valor convertido a mayusculas
    return tx.toUpperCase();
  }

  function capital(e) {
    key=e.keyCode || e.which;
   
    teclado=String.fromCharCode(key).toLowerCase();
   
  numeros="0123456789.,";
   
    especiales="8-37-38-46-164";
   
    teclado_especial=false;
   
    for(var i in especiales){
      if(key===especiales[i]){
        teclado_especial=true;
        break;
      }
    }
   
    if(numeros.indexOf(teclado)===-1 && !teclado_especial){
      return false;
    }
  
  }


