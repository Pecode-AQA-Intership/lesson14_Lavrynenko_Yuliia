import * as data from './data.js'
describe('Test fill the form', () => {
    before(() => {
      
      cy.visit(data.URL)
    })
    it('Registration Form', () => {
        cy.get(data.SELECTOR_RECORD_BUTTON).click();

        cy.get(data.SELECTOR_FIRST_NAME)
        .type(data.FIRST_NAME)
        .should('have.value', data.FIRST_NAME)

        cy.get(data.SELECTOR_LAST_NAME)
        .type(data.LAST_NAME)
        .should('have.value', data.LAST_NAME)

        cy.get(data.SELECTOR_EMAIL)
        .type(data.EMAIL)
        .should('have.value', data.EMAIL)

        cy.get(data.SELECTOR_AGE)
        .type(data.AGE)
        .should('have.value', data.AGE)

        cy.get(data.SELECTOR_SALARY)
        .type(data.SALARY)
        .should('have.value', data.SALARY)

        cy.get(data.SELECTOR_DEPARTMENT)
        .type(data.DEPARTMENT)
        .should('have.value', data.DEPARTMENT)

        cy.get(data.SELECTOR_SUBMIT).click();


        cy.get(".rt-tbody").should("include.text", data.FIRST_NAME)
        cy.get(".rt-tbody").should("include.text", data.LAST_NAME)
        cy.get(".rt-tbody").should("include.text", data.EMAIL)
        cy.get(".rt-tbody").should("include.text", data.AGE)
        cy.get(".rt-tbody").should("include.text", data.SALARY)
        cy.get(".rt-tbody").should("include.text", data.DEPARTMENT)

      })

     it("Edit user and check that each field is editable", () => {

           cy.get(data.SELECTOR_EDIT).click()
           cy.get(".modal-content").should("be.visible")
        
           cy.get(data.SELECTOR_FIRST_NAME).click().clear()
                .should("be.empty")
                .type(data.EDIT_USER_FIRST_NAME)
                .should("have.value", data.EDIT_USER_FIRST_NAME)
        
           cy.get(data.SELECTOR_LAST_NAME).click().clear()
                .should("be.empty")
                .type(data.EDIT_USER_LAST_NAME)
                .should("have.value", data.EDIT_USER_LAST_NAME)
        
            cy.get(data.SELECTOR_EMAIL).click().clear()
                .should("be.empty")
                .type(data.EDIT_USER_EMAIL)
                .should("have.value", data.EDIT_USER_EMAIL)
        
            cy.get(data.SELECTOR_AGE).click().clear()
                .should("be.empty")
                .type(data.EDIT_USER_AGE)
                .should("have.value", data.EDIT_USER_AGE)
        
            cy.get(data.SELECTOR_SALARY).click().clear()
                .should("be.empty")
                .type(data.EDIT_USER_SALARY)
                .should("have.value", data.EDIT_USER_SALARY)
        
            cy.get(data.SELECTOR_DEPARTMENT).click().clear()
                .should("be.empty")
                .type(data.EDIT_USER_DEPARTMENT)
                .should("have.value", data.EDIT_USER_DEPARTMENT)
        
            cy.get(data.SELECTOR_SUBMIT).click()
        
            cy.get(".rt-tbody").should("include.text", data.EDIT_USER_FIRST_NAME)
            cy.get(".rt-tbody").should("include.text", data.EDIT_USER_LAST_NAME)
            cy.get(".rt-tbody").should("include.text", data.EDIT_USER_EMAIL)
            cy.get(".rt-tbody").should("include.text", data.EDIT_USER_AGE)
            cy.get(".rt-tbody").should("include.text", data.EDIT_USER_SALARY)
            cy.get(".rt-tbody").should("include.text", data.EDIT_USER_DEPARTMENT)
           })

        it("Delete user from the table and check that user was deleted", () => {
            cy.get(data.SELECTOR_DELETE).click();
            cy.get('.rt-tbody').should("not.contain.text",data.EDIT_USER_FIRST_NAME)
           })

        it("Check the searching functionality", () => {
            cy.get(data.SELECTOR_SEARCH).click()
                .type("Legal")
                .should("have.value", "Legal")

            cy.get(".rt-tbody").should("include.text", "Legal")
            cy.get(data.SELECTOR_SEARCH).click().clear()
          })

        it("Sorting table by salary", () => {
          cy.contains('.rt-resizable-header-content', 'Salary').click()
          
          })
          
      
      })
                  
              
            
          
        

