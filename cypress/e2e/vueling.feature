Feature: Vueling

        Scenario: Navegar
                Given Navegar a la pagina de vuelos
                When  Selecciono billete ida y vuelta a "Madrid"
                And Selecciono la fecha de salida y fecha de regreso
                And Selecciono con 2 adultos y 1 niño
                And Hago click en Aceptar y Buscar vuelos


