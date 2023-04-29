describe('Modal', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open by clicking on the book item and close by clicking on the backdrop or cross', () => {
    cy.visit('/');

    cy.get('[id=portal]').should('be.empty');

    // Open modal
    cy.get('[data-testid="book-item"]').first().click();

    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="backdrop"]').should('be.visible');

    // Close modal on backdrop click
    cy.get('[data-testid="backdrop"]').click('topRight');

    cy.get('[id=portal]').should('be.empty');

    // Open modal
    cy.get('[data-testid="book-item"]').first().click();

    cy.contains('google books').should('be.visible');
    cy.get('[data-testid="image"]').should('be.visible');
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="backdrop"]').should('be.visible');

    // Close modal on cross click
    cy.get('[data-testid="close-modal-btn"]').click();

    cy.get('[id=portal]').should('be.empty');
  });
});
