import { HomePage } from "./pageObjects/homePage";

describe('Katalon test scenarios', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it.only("Make an Appointment", () => {
    HomePage.appointmentButton.click();
  })
});