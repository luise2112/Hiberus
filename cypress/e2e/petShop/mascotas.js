class Mascota{
constructor(array)
obtenerRepeticiones(array) {
        var diccionario = {};
        
        for (var i = 0; i < array.length; i++) {
          var elemento = array[i];
          if (elemento in diccionario) {
            diccionario[elemento] += 1;
          } else {
            diccionario[elemento] = 1;
          }
        }
        
        var repeticiones = {};
        for (var key in diccionario) {
          if (diccionario.hasOwnProperty(key) && diccionario[key] > 1) {
            repeticiones[key] = diccionario[key];
          }
        }
        cy.log(repeticiones)
        return repeticiones;
      }
}