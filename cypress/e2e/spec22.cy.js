/// <reference types= "cypress" />
import { set } from '../fixtures/formData2.json'

describe('DemoQA Menu-titles', () => {
    // let set;


    before(function () {
        // cy.fixture('formData2')
        // .its('set')
        // .then((data) => {
        //     set = data;
        // });
    });

    beforeEach(function () {
        cy.visit('/') //moved to cypress_config
        cy.viewport(1920, 1080)

    })

    set.forEach((obj) => {

        it('Form filling Version ', () => {
            cy.get('.card:nth-child(2)').click()
            cy.get('.element-group:nth-child(2)>div').click()
            cy.get('#firstName')
                .should('have.text', '')
                .type(obj.firstName)
                .should('have.value', obj.firstName)
            // .should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get('#userEmail')
                .should('have.text', '')
                .type(obj.userEmail)
                .should('have.value', obj.userEmail)
            cy.get('#submit').click()
            // cy.get('#firstName').should('have.css', 'border-color', 'rgb(40, 167, 69)')
            // cy.get('#userEmail').should('have.css', 'border-color', 'rgb(40, 167, 69)')
        });
    });


})