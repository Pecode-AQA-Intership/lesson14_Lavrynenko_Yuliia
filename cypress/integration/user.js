describe('Test fill the form', () => {
    before(() => {
      
      cy.visit('https://demoqa.com/webtables')
    })
    it('Registration Form', () => {
        cy.get('#addNewRecordButton').click();

        cy.get('#firstName')
        .type('11111111111')
        .should('have.value', '11111111111')

        cy.get('#lastName')
        .type('222222222')
        .should('have.value', '222222222')

        cy.get('#userEmail')
        .type('222222222@.gmail.com')
        .should('have.value', '222222222@.gmail.com')

        cy.get('#age')
        .type('22')
        .should('have.value', '22')

        cy.get('#salary')
        .type('45')
        .should('have.value', '45')

        cy.get('#department')
        .type('testing')
        .should('have.value', 'testing')

        cy.get('#submit').click();

        cy.get(11111111111)
      .should('have.text',`11111111111`)
//deleted
        cy.get('#delete-record-4').click();

//search
        cy.get('#searchBox')
        .type('45')
        .should('have.value', '45')
        cy.get('#basic-addon2').click()

     
})
})