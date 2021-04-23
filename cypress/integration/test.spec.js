///<reference  types="Cypress" />

import {
    mobileReplanishment
} from "../support/pages/mobileReplenishment"
import {
    transfers
} from "../support/pages/transfers"
import {
    basePage
} from "../support/pages/basePage"
import * as CardConstans from '../support/constants'

describe('Privat24 tests', () => {
    it('Replanishment of Ukraine mobile phone number', () => {
        basePage.open('https://next.privat24.ua/mobile?lang=en')
        mobileReplanishment.typePhoneNumber('680310775')
        basePage.typeAmount('1')
        basePage.typeDebitCardData(CardConstans.card.number, CardConstans.card.expireDate, CardConstans.card.cvv)
        cy.wait(3000)
        basePage.submitPayment()
        mobileReplanishment.checkDebitCard('4552 **** **** 8217')
        mobileReplanishment.checkDebitAmount('1')
        mobileReplanishment.checkDebitCurrency('UAH')
        mobileReplanishment.checkCommission('2')
        mobileReplanishment.checkCommissionCurrency('UAH')
    })

    it('Many transfer beetwen foreigh cards ', () => {
        basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
        //Type data
        basePage.typeDebitCardData(CardConstans.card.number, CardConstans.card.expireDate, CardConstans.card.cvv)
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

    it('Example sending the Get request ', () => {
        cy.request('https://next.privat24.ua')
            .then((response) => {
                console.log(response);
            })

    })

    it('Example sending the POST request ', () => {

        const requestBody = {
            "action": "add",
            "phone": "+380680310775",
            "amount": 50,
            "currency": "UAH",
            "cardCvv": "111",
            "card": "4552331448138217",
            "cardExp": "0524",
            "operator": "Kyivstar Ukraine",
            "operatorId": "602",
            "xref": "0b8ff67fcc3258161dad2cb1007a5d53",
            "_": 1619200159450
        }

        const headersData = {cookie: "_ga=GA1.2.1758838676.1618080785; _gid=GA1.2.1020219545.1619199426; pubkey=317014d488b93a3ed119a246d82ec7fb; lfp=4/10/2021, 9:53:16 PM; pa=1619199438004.22070.10417836353285082next.privat24.ua0.9738190003556719+1; fp=11; _gat_gtag_UA_29683426_11=1"}
        cy.request({
                method: "POST",
                url: "https://next.privat24.ua/api/p24/pub/mobipay",
                body: requestBody,
                headers: headersData
            })
            .then((response) => {
                expect(response).to.have.property('status').to.equal(200)
                expect(response.body).to.have.property('status').to.equal("success")
                expect(response.body.data).to.have.property('id')
            })

    })

    it.only('Example sending the POST request ', () => {

        const requestBody = {
            "action": "add",
            "phone": "+380680310775",
            "amount": 50,
            "currency": "UAH",
            "cardCvv": "111",
            "card": "4552331448138217",
            "cardExp": "0524",
            "operator": "Kyivstar Ukraine",
            "operatorId": "602",
            "xref": "0b8ff67fcc3258161dad2cb1007a5d53",
            "_": 1619200159450
        }

        const headersData = {cookie: "_ga=GA1.2.1758838676.1618080785; _gid=GA1.2.1020219545.1619199426; pubkey=317014d488b93a3ed119a246d82ec7fb; lfp=4/10/2021, 9:53:16 PM; pa=1619199438004.22070.10417836353285082next.privat24.ua0.9738190003556719+1; fp=11; _gat_gtag_UA_29683426_11=1"}
        cy.request({
                method: "POST",
                url: "https://next.privat24.ua/api/p24/pub/mobipay",
                body: requestBody,
                headers: headersData
            }).its('body').should("contain", {
                status:'success'
            })
           

    })
})