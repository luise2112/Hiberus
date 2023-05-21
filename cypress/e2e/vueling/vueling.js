import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonPage } from "../POM/CommonPage"
import { HomePage } from "../POM/HomePage";
const username = "gatubelo"

Given("Navegar a la pagina de vuelos", () => {
        CommonPage.navegarVueling();

});

When("Selecciono billete ida y vuelta a {string}", (destino) => {
        HomePage.insertarDestino(destino);

});

And("Selecciono la fecha de salida y fecha de regreso", () => {
        HomePage.seleccionarFechaDeIda();
        HomePage.seleccionarFechaDeVuelta();

});

And("Selecciono con 2 adultos y 1 niño", () => {
        HomePage.agregarUnAdultoMas();
        HomePage.agregarUnNinoMas();

});

And("Hago click en Aceptar y Buscar vuelos", () => {
        HomePage.hacerClickEnElBotonAceptar();
        // HomePage.hacerClickEnElBotonBuscar();
        // HomePage.obtenerUrlNuevaPestañaobtenerUrlNuevaPestaña().then((newTabUrl) => {
        //         cy.log('URL de la nueva pestaña:', newTabUrl);
        // });

});
