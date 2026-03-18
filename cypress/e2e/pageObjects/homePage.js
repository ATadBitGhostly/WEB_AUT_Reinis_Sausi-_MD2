import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    static get url() {
        return '';
    }

    static get appointmentButton() {
        return cy.get('#btn-make-appointment');
    }

    static get burgerButton() {
        return cy.get('#menu-toggle');
    }

    static get historyBtn() {
        return cy.get('#sidebar-wrapper li:nth-child(4)');
    }

}