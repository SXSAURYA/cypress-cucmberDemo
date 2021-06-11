import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'

const homePage = new HomePage();
const productPage = new ProductPage();
var name;
var gender;

Given("When I open Ecommerce Page", () => {
    cy.visit(Cypress.env('testUrl'));
})

When("I fill the form details", function(dataTable) {
    name = dataTable.rawTable[1, 0];
    gender = dataTable.rawTable[1, 1];
    homePage.inputTextBox().type(name);
    homePage.selectGenderDropdown().select(gender);
})

When("I add Items to Cart", function() {
    homePage.shopTab().click();
    cy.addItemsInCart('h4.card-title', 'Samsung Note 8', 'button.btn.btn-info')
    cy.addItemsInCart('h4.card-title', 'Nokia Edge', 'button.btn.btn-info')
    productPage.checkoutButton().click();
})

And("Validate the total Price", () => {
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
})

Then("select the country submit and verify Thankyou", () => {
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

})


Then("I validate the form Behaviour", function() {
    homePage.selectGenderDropdown().should('have.value', gender)
    homePage.dataBindingTextBox().should('have.value', name)
    homePage.inputTextBox().should('have.attr', 'minlength', '2')
    homePage.entreprenuerRadioButton().should('be.disabled');
})

And("And Select the shop Page", () => {
    homePage.shopTab().click();
})