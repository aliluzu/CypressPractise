/// <reference types= "cypress" />

describe('DemoQA Menu-titles', () => {
   

    before(function () {
        
        cy.fixture('formData').as('data')
    })

    beforeEach(function () {
        cy.visit('/') //moved to cypress_config
        cy.viewport(1024, 768)

    })

    it('Form filling Version ', () => {
        cy.get('@data').then((formData) => {
            cy.get('.card:nth-child(2)').click()
            cy.get('.element-group:nth-child(2)>div').click()
            cy.get('#firstName')
                .should('have.text', '')
                .type(formData.firstName)
                .should('have.value', formData.firstName)
            // .should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get('#userEmail')
                .should('have.text', '')
                .type(formData.userEmail)
                .should('have.value', formData.userEmail)
            cy.get('#submit').click()
            cy.get('#firstName').should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get('#userEmail').should('have.css', 'border-color', 'rgb(40, 167, 69)')
        })
    })


})