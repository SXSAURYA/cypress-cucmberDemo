/// <reference types="Cypress"/>
describe('This is my first test', () => {

    it('Handling Web Tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table#product tr td:nth-of-type(2)').each(($el, index, $list) => {
            if ($el.text() === 'Master Selenium Automation in simple Python Language') {
                cy.get("table#product tr:nth-child(" + index + ") td:nth-child(3)").then((txt) => cy.log(txt.text()))
            }
        })
    });


    it('Handling Web Tables in get method', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table#product tr td:nth-of-type(2)').each(($el, index, $list) => {
            if ($el.text() === 'Master Selenium Automation in simple Python Language') {
                cy.get('table#product tr td:nth-of-type(2)').eq(index).next().then((price) => {
                    cy.log(price.text())
                    expect(price.text()).to.equal('25')
                });

            }
        })
    });

});