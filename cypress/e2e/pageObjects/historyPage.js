import { BasePage } from "./basePage";

export class HistoryPage extends BasePage {
    static get url() {
        return '/history.php#history';
    }

    static get historyThing() {
        return cy.get('#history .col-sm-12 p');
    }
}