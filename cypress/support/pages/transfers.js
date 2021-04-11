class Transfers {
    typeDebitNameAndSurname(firstName, lastName) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }

    typeReceiverCard(numberCard) {
        cy.get('[data-qa-node="numberreceiver"]')
            .type(numberCard)
    }

    typeReceiverNameAndSurname(name, surname) {
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(name)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(surname)
    }

    typeComment(comment) {
        cy.get('[data-qa-node="toggle-comment"]')
        .click()
        cy.get('[data-qa-node="comment"]')
        .type(comment)
 
    }

    checkPayerAndReceiverCard (endDebitCard, endReceiverCard) {
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', endDebitCard)
            .get('[data-qa-node="receiver-card"]')
            .should('have.text', endReceiverCard)
    }  
    
    checkPayerAmountAndTotal (amount, total) {
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', amount)
            .get('[data-qa-node="total"]')
            .find('span')
            .should('contain.text', total)
    }

    checkCommission (amount) {
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', amount)
    }



    checkTotalCurrency (currency) {
        cy.get('[data-qa-node="total"]')
            .find('small')
            .should('contain.text', currency)
    }

    checkComment (comment) {
        cy.get('[data-qa-node="comment"]')
            .should('contain.text', comment)
    }
}

export const transfers = new Transfers();