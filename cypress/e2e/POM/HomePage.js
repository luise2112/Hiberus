export class HomePage {
        static get elements() {
          return {
            get destinoTextbox() {
              return cy.get("#destinationInput");
            },
            get botonBuscar() {
              return cy.get("#btnSubmitHomeSearcher");
            },
            get fechaDiaActual() {
              return cy.get('td[class*="current-day"] a');
            },
            get botonDeAgregarAdulto() {
              return cy.get("#adultsIncrease");
            },
            get buttonDeAgregarNino() {
              return cy.get("#childrenIncrease");
            },
            get botonAceptar() {
              return cy.contains("Aceptar");
            },
        //     get botonBuscar() {
        //       return cy.get("#btnSubmitHomeSearcher");
        //     },
          };
        }
      
        static insertarDestino(destino) {
          this.elements.destinoTextbox.type(destino);
          cy.wait(5000)
          cy.contains("p", destino).click();
        }
      
        static seleccionarFechaDeIda() {
          cy.wait(2000)
          this.elements.fechaDiaActual.then((hoy) => {
            const fechaDeHoy = hoy.attr("aria-label");
            const diaDeHoy = fechaDeHoy.substring(0, fechaDeHoy.indexOf(","));
            const fechaDeIda = Number(diaDeHoy) + 4;
            cy.get(".ui-datepicker-calendar").first().find(`[aria-label*="${fechaDeIda},"]`).click();
          });
        }
      
        static seleccionarFechaDeVuelta() {
          this.elements.fechaDiaActual.then((hoy) => {
            const fechaDeHoy = hoy.attr("aria-label");
            const diaDeHoy = fechaDeHoy.substring(0, fechaDeHoy.indexOf(","));
            const fechaDeVuelta = Number(diaDeHoy) + 6;
            cy.get(".ui-datepicker-calendar").first().find(`[aria-label*="${fechaDeVuelta},"]`).click();
          });
        }
      
        static agregarUnAdultoMas() {
          this.elements.botonDeAgregarAdulto.click();
        }
      
        static agregarUnNinoMas() {
          this.elements.buttonDeAgregarNino.click();
        }
      
        static hacerClickEnElBotonAceptar() {
          this.elements.botonAceptar.click();
        }
      
        // static hacerClickEnElBotonBuscar() {
        //   this.elements.botonBuscar.click();
        //   cy.window().then((win) => {
        //       const newTab = win.top.document.querySelector('a[target="_blank"]');
        //       const newTabUrl = newTab.href;
        //       cy.log('url', newTabUrl)
        //     });
        // }
      }