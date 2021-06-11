/// <reference types="Cypress"/>
describe('This is my first test', () => {

    it('Checkout to the place order', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(1000).then(() => console.log('running after typed ca sf'))
        cy.get('.products').as('productLocator');
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
                const vegText = $e1.find('h4.product-name').text()
                if (vegText.includes('Cashews')) {
                    $e1.find('button').click()
                }
            })
            //compare with expected value
        cy.get('.cart-icon img').click();
        //click on proceed to checkout
        cy.get('.cart-preview.active button').click();
    });

});