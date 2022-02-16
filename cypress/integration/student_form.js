import * as data from './data.js'
describe('Test fill the form', () => {
    before(() => {
      
      cy.visit(data.URL)
    })
    it('Enter data for the first student', () => {
      
      cy.get(data.SELECTOR_FIRST_NAME)
        .type(data.FIRST_NAME)
        .should('have.value', data.FIRST_NAME)
    
      cy.get(data.SELECTOR_LAST_NAME)
        .type(data.LAST_NAME)
        .should('have.value', data.LAST_NAME)

      cy.get(data.SELECTOR_EMAIL)
      .type(data.EMAIL)
      .should('have.value', data.EMAIL)

      cy.get(data.SELECTOR_GENDER_MALE).siblings().click();

      cy.get(data.SELECTOR_MOBILE_NUMBER)
      .type(data.MOBILE_NUMBER)
      .should('have.value', data.MOBILE_NUMBER)

      cy.get(data.SELECTOR_BIRTH).click()
      let a = cy.get(data.SELECTOR_MONTH).select('June')
      let b = cy.get(data.SELECTOR_YEAR).select('2000')
      let c = cy.get(data.SELECTOR_DAY).contains(data.DAY).click()


      cy.get(data.SELECTOR_SUBJECTS)
      .type(`Maths{enter}`)

      cy.get(data.SELECTOR_HOBBY).click({force: true});

      cy.get(data.SELECTOR_CURRENT_ADDRESS)
      .type(data.CURRENT_ADDRESS)
      .should('have.value', data.CURRENT_ADDRESS)

      cy.get(data.SELECTOR_SUBMIT_BTN).click()

      cy.get(data.VARIFY_NAME)
      .should('contain',data.FIRST_NAME)
      cy.get(data.VARIFY_EMAIL)
      .should('contain',data.EMAIL)
      cy.get(data.VARIFY_GENDER)
      .should('contain','Male')
      cy.get(data.VARIFY_MOBILE)
      .should('contain',data.MOBILE_NUMBER)
      cy.get(data.VARIFY_HOBBY)
      .should('contain','Sports')
    
     })


    describe('Test fill the form', () => {
    before(() => {
      
      cy.visit(data.URL)
    })
     it('Enter data for the second student', () => {
      cy.get(data.SELECTOR_FIRST_NAME)
      .type(data.FIRST_NAME)
      .should('have.value', data.FIRST_NAME)
  
    cy.get(data.SELECTOR_LAST_NAME)
      .type(data.LAST_NAME)
      .should('have.value', data.LAST_NAME)

    cy.get(data.SELECTOR_EMAIL)
    .type(data.EMAIL)
    .should('have.value', data.EMAIL)

    cy.get(data.SELECTOR_GENDER_OTHER).siblings().click();

    cy.get(data.SELECTOR_MOBILE_NUMBER)
    .type(data.MOBILE_NUMBER)
    .should('have.value', data.MOBILE_NUMBER)

    cy.get(data.SELECTOR_BIRTH).click()
    let a = cy.get(data.SELECTOR_MONTH).select('June')
    let b = cy.get(data.SELECTOR_YEAR).select('2000')
    let c = cy.get(data.SELECTOR_DAY).contains(data.DAY).click()


    cy.get(data.SELECTOR_SUBJECTS)
    .type(`Hindi{enter}`)

    cy.get(data.SELECTOR_HOBBIES).click({force: true});

    cy.get(data.SELECTOR_CURRENT_ADDRESS)
    .type(data.CURRENT_ADDRESS)
    .should('have.value', data.CURRENT_ADDRESS)

    cy.get(data.SELECTOR_SUBMIT_BTN).click()

    cy.get(data.VARIFY_NAME)
    .should('contain',data.FIRST_NAME)
    cy.get(data.VARIFY_EMAIL)
    .should('contain',data.EMAIL)
    cy.get(data.VARIFY_GENDER)
    .should('contain','Other')
    cy.get(data.VARIFY_MOBILE)
    .should('contain',data.MOBILE_NUMBER)
    
    cy.get(data.VARIFY_HOBBY)
    .should('contain','Reading')
    
    cy.get(data.SELECTOR_CLOSE_BTN).click()

    })
  })
})
