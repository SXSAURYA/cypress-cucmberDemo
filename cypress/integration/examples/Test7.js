/// <reference types="Cypress"/>
describe('This is my first test', () => {

    it('Handling attributes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(ele => {
            const url = ele.prop('href');
            cy.log(url);
            cy.visit(url)
        })
    });


});