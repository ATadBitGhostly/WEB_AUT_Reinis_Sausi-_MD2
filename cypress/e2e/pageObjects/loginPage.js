import { BasePage } from "./basePage";

export class LoginPage extends BasePage {

    static get url() {
        return '/profile.php#login';
    }

    static get usernameInput() {
        return cy.get('#txt-username');
    }

    static get passwordInput() {
        return cy.get('#txt-password');
    }

    static get btnLogin() {
        return cy.get('#btn-login');
    }

    

} 