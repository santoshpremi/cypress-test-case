/// <reference types="cypress" />
describe('Login Page', () => {
    it('successfully logs in with valid credentials', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[type="email"]').type('premi@example.com');
      cy.get('input[type="password"]').type('password');
      cy.get('button').click();
      cy.contains('Welcome, premi'); 
    });
  
    it('shows an error message with invalid credentials', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[type="email"]').type('invalid@example.com');
      cy.get('input[type="password"]').type('invalidpassword');
      cy.get('button').click();
      cy.contains('Invalid credentials');
    });
  });
  