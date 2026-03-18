import { AppPage } from "./pageObjects/appointmentPage";
import { HistoryPage } from "./pageObjects/historyPage.js";
import { HomePage } from "./pageObjects/homePage.js";
import { LoginPage } from "./pageObjects/loginPage";
import { SumPage } from "./pageObjects/summaryPage";

describe('Katalon test scenarios', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it("Make an Appointment", () => {
    
    HomePage.appointmentButton.click();
    
    LoginPage.usernameInput.type('John Doe');
    LoginPage.passwordInput.type('ThisIsNotAPassword');
    LoginPage.btnLogin.click();
    
    AppPage.facultySelect.select('Seoul CURA Healthcare Center');
    AppPage.checkBtn.click();
    AppPage.radioBtnSelect.click();
    AppPage.dateSelect.click();
    AppPage.dateWindow.contains('30').click();
    AppPage.comment.type('CURA Healthcare Service');
    AppPage.appointmentBtn.click();

    SumPage.facility.contains('Seoul CURA Healthcare Center').should('be.visible');
    SumPage.hospitalReadmission.contains('Yes').should('be.visible');
    SumPage.program.contains('Medicaid').should('be.visible');
    SumPage.visitDate.contains('30/03/2026').should('be.visible');
    SumPage.comment.contains('CURA Healthcare Service').should('be.visible');

  });

  it.only("Make an Appointment", () => {
    
    HomePage.appointmentButton.click();
    
    LoginPage.usernameInput.type('John Doe');
    LoginPage.passwordInput.type('ThisIsNotAPassword');
    LoginPage.btnLogin.click();
    
    HomePage.burgerButton.click();
    HomePage.historyBtn.click();

    HistoryPage.historyThing.contains('No appointment.').should('be.visible');
  });

});