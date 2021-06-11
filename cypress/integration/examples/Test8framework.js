/// <reference types="Cypress"/>
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
describe('This is my first test', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    })

    //get the data from fixtures
    it('sample test for get the data', function() {
        const homePage = new HomePage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.inputTextBox().type(this.data.name);
        homePage.inputTextBox().should('have.value', this.data.name)
        homePage.selectGenderDropdown().select(this.data.gender);
        homePage.selectGenderDropdown().should('have.value', this.data.gender)
        homePage.dataBindingTextBox().should('have.value', this.data.name)
        homePage.inputTextBox().should('have.attr', 'minlength', '3')
        homePage.entreprenuerRadioButton().should('be.disabled');
    });


    it('Validate the addition in cart', function() {
        const homePage = new HomePage();
        const productPage = new ProductPage();
        cy.visit(Cypress.env('testUrl'));
        homePage.shopTab().click();
        cy.addItemsInCart('h4.card-title', 'Samsung Note 8', 'button.btn.btn-info')
        cy.addItemsInCart('h4.card-title', 'Nokia Edge', 'button.btn.btn-info')
        productPage.checkoutButton().click();
        //Here add the validation
        var sumOfProduct = 0;
        productPage.productPriceText().each(($el, index, $list) => {
            var data = ($el.text().replace(/\D/g, ''));
            sumOfProduct = Number(sumOfProduct) + Number(data);

        }).then(function() {
            cy.log(sumOfProduct)
        }).then(function() {
            //verify the sum
            productPage.totalProductPrice().should('have.contain', sumOfProduct)
        })
        productPage.checkoutItem().click()
        productPage.countryDropdown().type('India');
        productPage.countrySuggestionList().each(($el, index, $list) => {
            if ($el.text().includes('India')) {
                productPage.countrySuggestionList().eq(index).click();
            }
        })

        productPage.agreeCheckbox().check({ force: true });
        productPage.purchaseButton().click();
        productPage.successTextMsg().should('have.contain', 'Success! Thank you! Your order will be delivered in next few weeks :-)')

    });

});