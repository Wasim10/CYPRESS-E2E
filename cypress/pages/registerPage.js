export class registerPage{
     // define all the locators there in weblocators object
    weblocators={
       
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'

    }

      // enter first naem method
// we are getting URl from e2e file , env 
      OpenUrl(){
        cy.visit(Cypress.env('URL'))
      }

      enterFirstName(FName) {
    cy.get(this.weblocators.firstName).type(FName)
}

enterLastName(LName) {
    cy.get(this.weblocators.lastName).type(LName)
}

enterEmail(Email) {
    cy.get(this.weblocators.email).type(Email)
}

enterTelephone(Telephone) {
    cy.get(this.weblocators.telephone).type(Telephone)
}

enterPassword(Password) {
    cy.get(this.weblocators.password).type(Password)
}

enterPasswordConfirm(ConfirmPassword) {
    cy.get(this.weblocators.passwordConfirm).type(ConfirmPassword)
}

checkPolicy() {
    cy.get(this.weblocators.policyCheckbox).check()
}

clickContinue() {
    cy.get(this.weblocators.continue).click()
}

  

}
