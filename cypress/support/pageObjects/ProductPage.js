class ProductPage {

    productTitle() {
        return cy.get("h4.card-title");
    }

    addToCartButton() {
        return cy.get("button.btn.btn-info");
    }


    checkoutButton() {
        return cy.get("li.nav-item a.nav-link.btn");
    }

    checkoutItem() {
        return cy.get("button.btn.btn-success");
    }

    countryDropdown() {
        return cy.get("input#country");
    }

    countrySuggestionList() {
        return cy.get("div.suggestions li a");
    }

    agreeCheckbox() {
        return cy.get("input#checkbox2");
    }

    purchaseButton() {
        return cy.get("input[value='Purchase']");
    }

    successTextMsg() {
        return cy.get("div.alert.alert-success");
    }

    productPriceText() {
        return cy.get("table tbody td.text-center:nth-of-type(4)");
    }

    totalProductPrice() {
        return cy.get("table tbody td.text-right");
    }
}
export default ProductPage;