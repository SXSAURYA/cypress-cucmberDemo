/// <reference types="Cypress"/>
describe('This is my first test', () => {

    xit('searching any test', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
            // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($e1, index, $list) => {
            const vegText = $e1.find('h4.product-name').text()
            if (vegText.includes('Cashews')) {
                $e1.find('button').click()
            }
        })
        cy.get('.brand.greenLogo').then((logoele, error) => {
            if (error != null)
                cy.log(error)
            else
                cy.log(logoele.text())
        })
    });


    xit('searching any test with aliases', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(1000).then(() => console.log('running after typed ca sf'))
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4)
            // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
                const vegText = $e1.find('h4.product-name').text()
                if (vegText.includes('Cashews')) {
                    $e1.find('button').click()
                }
            })
            //compare with expected value
        cy.get('.brand.greenLogo').should('have.text', 'GREENKART')
            //printing the data
        cy.get('.brand.greenLogo').then((logoele, error) => {
            if (error != null)
                cy.log(error)
            else
                cy.log(logoele.text())
        })
    });


    it('Checkout to the place order', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(1000).then(() => console.log('running after typed ca sf'))
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4)
            // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
                const vegText = $e1.find('h4.product-name').text()
                if (vegText.includes('Cashews')) {
                    $e1.find('button').click()
                }
            })
            //compare with expected value
        cy.get('.brand.greenLogo').should('have.text', 'GREENKART')
            //printing the data
        cy.get('.brand.greenLogo').then((logoele, error) => {
            if (error != null)
                cy.log(error)
            else
                cy.log(logoele.text())
        })
    });

});