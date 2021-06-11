/// <reference types="Cypress"/>
describe('This is my first test', () => {

    it('Checkbox validation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("#checkbox-example input[type='checkbox']").check(['option1', 'option2', 'option3']).should('be.checked')
    });


    it('Radio validation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value=\'radio1\']').check().should('be.checked').and('have.value', 'radio1')
    });


    it('Select dropdown validation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
    });


    it('Dyanamic Select dropdown validation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('ul#ui-id-1 li.ui-menu-item').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    });

    it('Validate visiblity or invisiblity', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')
    });


    it('Handling the alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')
    });

});