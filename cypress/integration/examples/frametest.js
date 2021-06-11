/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
describe('This is my first test', () => {

    it('Iframe test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("[href*='mentorship']").eq(0).click();
        cy.iframe().find(".pricing-title").should('have.length', 2)


    });


});