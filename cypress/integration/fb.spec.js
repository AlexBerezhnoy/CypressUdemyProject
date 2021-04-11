/// <reference  types="Cypress" />

describe('Facebook tests', () => {
    it('By id', () =>  {
        cy.visit("http://facebook.com")
        cy.get('#email')
    });
    it('By class', () =>  {
        cy.visit("https://docs.cypress.io")
        cy.get('button.DocSearch').click()
    });
    it('By tag', () =>  {
        cy.visit("https://docs.cypress.io")
        cy.get('nav')
    });

    it('By tag value', () =>  {
        cy.visit("http://facebook.com")
        cy.get('[name="pass"]')
    });

    it('By different tag value', () =>  {
        cy.visit("http://facebook.com")
        cy.get('[data-testid="open-registration-form-button"][role="button"]')
    });

    it.only('By contains name', () =>  {
        cy.visit("https://next.privat24.ua/")
        cy.get('*[class^="card"')
    })

    
    it('Usin get with find and eq', () =>  {
        cy.visit("https://next.privat24.ua/deposit/open")
        cy.get('tbody').find('td').find('div').find('button').eq(0);
    })
    it.only('Usin get with find and eq', () =>  {
        cy.viewport(1800,600)
        cy.visit("https://docs.cypress.io/api/events/catalog-of-events")
        cy.get('main').find('nav').eq(1).find('a').eq(4);
    })
})