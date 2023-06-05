/// <reference types= "cypress" />

describe('UploadFile', () => {

    it('User select file', () =>  {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").selectFile('cypress/fixtures/testIMG.jpg')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('have.text',  '\n    testIMG.jpg\n  ')

    })

    it('User select file example 2', () =>  {
        cy.visit("https://primereact.org/fileupload/#template");
        cy.get('.p-fileupload-choose input[type="file"]').eq(3).selectFile('cypress/fixtures/testIMG.jpg', {force: true})
       

    })







})