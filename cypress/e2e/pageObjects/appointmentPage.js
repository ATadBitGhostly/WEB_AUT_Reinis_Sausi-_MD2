import { BasePage } from "./basePage";

export class AppPage extends BasePage {

    static get url() {
        return '/#appointment';
    }

    static get facultySelect() {
        return cy.get('#combo_facility');
    }

    static get checkBtn() {
        return cy.get('#chk_hospotal_readmission');
    }
    
    static get radioBtnSelect() {
        return cy.get('#radio_program_medicaid');
    }
    
    static get dateSelect() {
        return cy.get('#txt_visit_date');
    }

    static get dateWindow() {
        return cy.get('.datepicker');
    }
    
    static get comment() {
        return cy.get('#txt_comment');
    }
    
    static get appointmentBtn() {
        return cy.get('#btn-book-appointment');
    }

    
}