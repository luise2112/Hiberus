import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const username = "Pedrote"
const firstName = "Pablo"
const array = []

When("Creando un usuario", () => {
  const cabeza = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer special-key',
  };

  const datos = {
    "id": 0,
    "username": username,
    "firstName": firstName,
    "lastName": "Algo tambien",
    "email": "manana@dhgjd.com",
    "password": "123Pass",
    "phone": "47589457689",
    "userStatus": 0
  }

  cy.request({
    method: 'POST',
    url: 'https://petstore.swagger.io/v2/user',
    body: datos,
    headers: cabeza
  })
});


Then("Puedo recuperar sus datos llamando al servicio correspondiente", () => {
  cy.request(`https://petstore.swagger.io/v2/user/${username}`).then(response => {
    const nombreConsultado = response.body.firstName
    assert.equal(nombreConsultado, firstName)
  })
});

Given("Consultar lista de mascotas vendidas", () => {
  cy.request(`https://petstore.swagger.io/v2/pet/findByStatus/?status=sold`).then(response => {
    const mascotas = response.body
    mascotas.forEach(mascota => {
      array.push(`{${mascota.id}, ${mascota.name}}`)
    })
  })
});

Then("Puedo agrupar mascotas de nombres iguales", () => {
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


});
 
