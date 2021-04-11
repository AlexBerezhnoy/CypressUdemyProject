class BasePage {
    open(url) {
        cy.visit(url)
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]')
        .type(amount)
    }

    typeDebitCardData(sourceCard, expireSource, cvvSource) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(sourceCard)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expireSource)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvvSource)
    }

    submitPayment() {
        cy.get('button[type="submit"]')
        .click()
    }
}

export const basePage = new BasePage();