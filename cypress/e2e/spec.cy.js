/// <reference types= "cypress" />

describe('DemoQA Menu-tilis', () => {
  //create a  variable
  const expectedMenuItemNames = [
    'Elements',
    'Forms', 
    'Alerts, Frame & Windows',
    'Widgets', 
    'Interactions',
    'Book Store Application'
  ];

  let formDatas;

  /* --- MOved to fixtures -> formData
  const firstName = 'Alina'
  const userEmail = 'test@redrover.com'
  */

  before(function()  {

    cy.fixture('formData').then((data) => {
      formDatas = data;
    })
  })

  beforeEach(function () {
    cy.visit('/') //moved to cypress_config
    /*
    cy.fixture('formData').then((data) => {
      this.formData = data; ---> moved above and changed this.formData to formDatas
      
    })
    */
  })

  /*
    //ficture formData
  it('Form filling', function() {
    cy.get('.card:nth-child(2)').click()
    cy.get('.element-group:nth-child(2)>div').click()
    cy.get('#firstName')
      .should('have.text', '')
      .type(`${this.formData.firstName}{enter}`)
      .should('have.value', this.formData.firstName)
      .should('have.css', 'border-color', 'rgb(40, 167, 69)')


      cy.get('#userEmail')
      .should('have.text', '')
      .type(`${this.formData.userEmail}}{enter}`)
      .should('have.value', this.formData.userEmail)
      .should('have.css', 'border-color', 'rgb(40, 167, 69)')
  })
  */

  it('Form filling Version 2', () => {
    cy.get('.card:nth-child(2)').click()
    cy.get('.element-group:nth-child(2)>div').click()
    cy.get('#firstName')
      .should('have.text', '')
      .type(formDatas.firstName)
      .should('have.value', formDatas.firstName)
      // .should('have.css', 'border-color', 'rgb(40, 167, 69)')
      cy.get('#userEmail')
      .should('have.text', '')
      .type(formDatas.userEmail)
      .should('have.value', formDatas.userEmail)
      cy.get('#submit').click()
      cy.get('#firstName').should('have.css', 'border-color', 'rgb(40, 167, 69)')
      cy.get('#userEmail').should('have.css', 'border-color', 'rgb(40, 167, 69)')
  })


})