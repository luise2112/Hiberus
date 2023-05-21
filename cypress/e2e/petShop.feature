Feature: petShop

        Scenario: Creacion y recuperacion de usuario
                When Creando un usuario
                Then Puedo recuperar sus datos llamando al servicio correspondiente

        Scenario: Consulta de mascotas
                Given Consultar lista de mascotas vendidas
                Then Puedo agrupar mascotas de nombres iguales
