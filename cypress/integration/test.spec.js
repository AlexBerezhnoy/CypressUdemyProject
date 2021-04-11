///<reference  types="Cypress" />

import {mobileReplanishment} from "../support/pages/mobileReplenishment"
import {transfers} from "../support/pages/transfers"
import {basePage} from "../support/pages/basePage"
import * as CardConstans  from '../support/constants'

describe('Privat24 tests', ()=>{
    it('Replanishment of Ukraine mobile phone number', ()=>{
        basePage.open('https://next.privat24.ua/mobile?lang=en')
        mobileReplanishment.typePhoneNumber('680310775')
        basePage.typeAmount('1')
        basePage.typeDebitCardData(CardConstans.card.number, CardConstans.card.expireDate , CardConstans.card.cvv)
        cy.wait(3000)
        basePage.submitPayment()
        mobileReplanishment.checkDebitCard('4552 **** **** 8217')
        mobileReplanishment.checkDebitAmount('1')
        mobileReplanishment.checkDebitCurrency('UAH')
        mobileReplanishment.checkCommission('2')
        mobileReplanishment.checkCommissionCurrency('UAH')
    })

    it('Many transfer beetwen foreigh cards ', ()=>{
        basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
        //Type data
        basePage.typeDebitCardData(CardConstans.card.number, CardConstans.card.expireDate , CardConstans.card.cvv)
        transfers.typeDebitNameAndSurname('Shayne', 'McConnel')
        transfers.typeReceiverCard('5309233034765085')
        transfers.typeReceiverNameAndSurname('Juliana', 'Janssen')
        basePage.typeAmount('300')
        transfers.typeComment('Cypress Test')
        cy.wait(3000)
        basePage.submitPayment()
        
        //Checks
        transfers.checkPayerAndReceiverCard('* 8217', '* 5085')
        transfers.checkPayerAmountAndTotal('300 UAH', '388.63')
        transfers.checkCommission('88.63 UAH')
        transfers.checkTotalCurrency('UAH')
        transfers.checkComment('Cypress Test')
    })
})