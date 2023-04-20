describe('Suggest book', () => {
  beforeEach(() => {
    cy.visit('/suggest');
  });

  it('shows validation errors on empty form submit', () => {
    cy.visit('/suggest');

    cy.get('[type="submit"]').click();

    cy.get('[data-testid="popup"]')
      .invoke('attr', 'class')
      .should('match', /error/i);

    cy.get('[data-testid="popup"]').contains('All form fields are required !');

    // Wait until popup hides
    cy.wait(3000);

    cy.get('[data-testid="popup"]').should('not.exist');

    cy.contains('Title should not be empty').should('be.visible');
    cy.contains('Author should not be empty').should('be.visible');
    cy.contains('Published date should not be empty').should('be.visible');
    cy.contains('Category should be selected').should('be.visible');
    cy.contains('Type should be chosen').should('be.visible');
    cy.contains('Image should be provided').should('be.visible');
    cy.contains('Terms should be accepted to submit the form').should(
      'be.visible'
    );
  });

  it('successfully adds new suggested book and saves it in redux', () => {
    cy.visit('/suggest');

    cy.contains('Title').click();
    cy.get('input[name="title"]').type('The best book ever');
    cy.contains('Author').click();
    cy.get('input[name="author"]').type('Dan Brown');
    cy.get('input[name="published"]').type('2015-02-12');
    cy.get('select').select('b3');
    cy.get('[type="file"]').attachFile('cover.jpg');
    cy.get('label[for="e-book"]').click();
    cy.get('label[for="agreement"]').click();

    cy.get('[type="submit"]').click();

    cy.get('[data-testid="popup"]')
      .invoke('attr', 'class')
      .should('match', /success/i);

    cy.get('[data-testid="popup"]').contains(
      'Your suggestion successfully added! 🎉'
    );

    // Wait until popup hides
    cy.wait(3000);

    // No error messages should show up
    cy.contains('Title should not be empty').should('not.exist');
    cy.contains('Author should not be empty').should('not.exist');
    cy.contains('Published date should not be empty').should('not.exist');
    cy.contains('Category should be selected').should('not.exist');
    cy.contains('Type should be chosen').should('not.exist');
    cy.contains('Image should be provided').should('not.exist');
    cy.contains('Terms should be accepted to submit the form').should(
      'not.exist'
    );

    // Inputs should be empty after submit
    cy.get('input[name="title"]').should('be.empty');
    cy.get('input[name="author"]').should('be.empty');
    cy.get('input[name="published"]').should('be.empty');
    cy.get('select option:selected').should('have.value', 'DEFAULT');
    cy.contains('Choose image').should('be.visible');
    cy.get('input[id="e-book"]').should('not.be.checked');
    cy.get('input[id="print"]').should('not.be.checked');
    cy.get('input[id="agreement"]').should('not.be.checked');

    // Renders suggested book item
    cy.get('[data-testid="book-item"]').should('be.visible');

    cy.contains('The best book ever').should('be.visible');
    cy.contains('Dan Brown').should('be.visible');

    cy.get('[data-testid="popup"]').should('not.exist');

    // Test if book is saved in redux
    cy.contains('about us').click();

    cy.url().should('include', '/about');

    cy.contains('suggest book').click();

    cy.url().should('include', '/suggest');

    cy.get('[data-testid="book-item"]').should('be.visible');

    cy.contains('The best book ever').should('be.visible');
    cy.contains('Dan Brown').should('be.visible');
  });

  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
});
