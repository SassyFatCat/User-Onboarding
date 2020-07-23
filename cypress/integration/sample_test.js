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
    })


})
