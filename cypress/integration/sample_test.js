describe('Inputs and submit button', () => {
    it('can navigate to the site', () => {
      // this is setup for the actual test
      cy.visit('http://localhost:3000')
      // assert that the site we landed at is the correct one
      cy.url().should('include', 'localhost')
    });

    it('Type a name in the \'name\' field', () => {
        cy.get('input[name="firstName"]')
            .type('Ryan')
            .should('have.value', 'Ryan')
    });

    it('Type an email address', () => {
        cy.get('input[name="email"]')
            .type('ryan@ryan.com')
            .should('have.value', 'ryan@ryan.com')
    });

    it('Type a password', () => {
        cy.get('input[name="password"]')
            .type('pass1234')
            .should('have.value', 'pass1234')
    });

    it('Can check the ToS checkbox', () => {
        cy.get('input[name="ToS"]').check()
            .should('have.value', 'on')
    });

    it('Can submit the form', () => {
        cy.get('button').click()
    });
})

describe('Check for form validation message if input is empty', () => {
    it('can navigate to the site', () => {
      // this is setup for the actual test
      cy.visit('http://localhost:3000')
      // assert that the site we landed at is the correct one
      cy.url().should('include', 'localhost')
    });

    it('Type an invalid entry in the \'name\' field', () => {
        cy.get('input[name="firstName"]')
            .type('R')
            .should('have.value', 'R');
        cy.get('.errorContainer p:nth-of-type(1)')
            .should('have.text', "Please enter your full first name")
    });

    it('Type an invalid entry in the \'email\' field', () => {
        cy.get('input[name="email"]')
            .type('email')
            .should('have.value', 'email');
        cy.get('.errorContainer p:nth-of-type(2)')
            .should('have.text', 'Email must be valid')
    });

    it('Type an invalid entry in the \'password\' field', () => {
        cy.get('input[name="password"]')
            .type('pa1')
            .should('have.value', 'pa1');
        cy.get('.errorContainer p:nth-of-type(3)')
            .should('have.text', 'Minimum of 7 characters required')
    });
})