class HomePage {

    inputTextBox() {
        return cy.get(".container input[name='name'][class^='form-control']");
    }

    dataBindingTextBox() {
        return cy.get("input[name='name']:nth-child(1)");
    }

    selectGenderDropdown() {
        return cy.get("#exampleFormControlSelect1");
    }

    entreprenuerRadioButton() {
        return cy.get("#inlineRadio3");
    }

    shopTab() {
        return cy.get("a[class='nav-link'][href*='shop']");
    }
}

export default HomePage;