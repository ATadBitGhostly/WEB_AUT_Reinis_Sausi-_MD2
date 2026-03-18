export class BasePage {
    static get visit() {
        cy.visit(this.url);
    }
}