import * as data from './test_Data.js';

describe('Test fill the form', () => {
  beforeEach(() => {
    
    cy.visit(data.URL)
  })
  it('Check of valid input', () => {
    //enter full name field 
    cy.get(data.selectorName)
      .type(data.FULL_NAME)
      .should('have.value', '')
  
    // enter email
    cy.get(data.selectorEmail)
      .type(data.EMAIL)
      .should('have.value', data.EMAIL)
  
    //enter current address
    cy.get(data.selectorCurrentAddress)
      .type(data.CURRENT_ADDRESS)
      .should('have.value', data.CURRENT_ADDRESS)
  
    //enter permanent address
    cy.get(data.selectorPermanentAddress)
      .type(data.PERMANENT_ADDRESS)
      .should('have.value', data.PERMANENT_ADDRESS)
    // clicked submit button
    cy.get('#submit').click();

 //verify results
    cy.get(data.verifyName)
      .should('have.text',`Name:${data.FULL_NAME}`)
  
    cy.get(data.verifyEmail)
      .should('have.text', `Email:${data.EMAIL}`)

    cy.get(data.verifyCurrentAddress)
      .should('have.text','')

    cy.get(data.verifyPermanentAddress)
      .should('have.text','')
    })
})

  
  
  
     
  
 