///<reference  types="Cypress" />

//type

it('Type', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[data-qa-node="phone-number"]')
    .type(112234544)
})

it('Focus', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[data-qa-node="amount"]')
    .focus()
})

it('Blur', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[data-qa-node="amount"]')
    .focus()
    .blur()
})

it('Clear', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[data-qa-node="amount"]')
    .type(999)
    .wait(2000)
    .clear()
})

it('Submit', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('form[method="post"]')
    .submit()
})

it('Click', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[data-qa-value="manual"]')
    .click()
})

it('Double click', ()=> {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-div').wait(150)
    .dblclick()
    .should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
})

it('Right click', ()=> {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.contains('Right click').wait(150).rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
})

it('Double click Mozzila', ()=> {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_samples_/Examples')
    cy.contains('My card', {"matchCase":false})
    .dblclick()
})

it('Check check', ()=> {
    cy.visit('https://www.facebook.com/reg/?')
    .get('input[value="2"]')
    .check()
})

it('Check uncheck', ()=> {
    cy.visit('https://en.privatbank.ua')
    .get('#switch-input')
    .check({force:true}).wait(2000)
    .uncheck({force:true})
})

it('Check select', ()=> {
    cy.visit('https://www.facebook.com/r.php?locale=en_US')
    .get('#month')
    .select('Feb')
    .get('#year')
    .select('1986')
    .get('#day')
    .select('12')
})

it('Check scroll Into view', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    .get('[data-qa-node="lang"]')
    .wait(2000)
    .scrollIntoView()
})

it('Check scroll view', ()=> {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    .wait(2000)
    .scrollTo(0,500)
})

it.only('Check trigger', ()=> {
    cy.visit('https://next.privat24.ua/?lang=en')
    .contains('Services')
    .wait(2000)
    .trigger('mouseover')
})