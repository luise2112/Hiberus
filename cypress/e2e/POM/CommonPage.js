export class CommonPage {
        static get data() {
          return {
            url: "https://www.vueling.com/es",
          };
        }
      
        static get elements() {
          return {
            get acceptCookiesButton() {
              return cy.get("#onetrust-accept-btn-handler");
            }
          };
        }
      
        static navegarVueling() {
          cy.visit(this.data.url);
          this.elements.acceptCookiesButton.click();
        }
      }
      