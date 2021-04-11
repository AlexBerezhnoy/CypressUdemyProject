class MobilePhoneReplanishment {
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
        .type(phoneNumber)
    }

    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
        .should('have.text', debitCard)
    }

    checkDebitAmount(amount) {
        cy.get('[data-qa-node="amount"]')
        .should('have.text', amount)
    }

    checkDebitCurrency(currency) {
        cy.get('[data-qa-node="currency"]').eq(1)
        .should('contain.text', currency)
    }

    checkCommission(commission) {
        cy.get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text', commission)
    }

    checkCommissionCurrency(currency) {
        cy.get('[data-qa-node="commission-currency"]')
        .should('contain.text', currency)
    }

}


export const mobileReplanishment = new MobilePhoneReplanishment();