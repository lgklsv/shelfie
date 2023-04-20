describe('Navigation between pages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens page to with book suggestion form on nav click', () => {
    cy.visit('/');

    cy.contains('suggest book').click();

    cy.url().should('include', '/suggest');
    cy.get('form').should('be.visible');
  });

  it('opens about us page on nav click', () => {
    cy.visit('/');

    cy.contains('about us').click();

    cy.url().should('include', '/about');
    cy.get('[alt="image"]').should('be.visible');
  });

  it('opens 404 page on invalid link', () => {
    cy.visit('/thereispagewiththispath');

    cy.url().should('include', '/thereispagewiththispath');
    cy.get('h2').contains('404').should('be.visible');
  });

  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
});
