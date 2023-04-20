describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('searches reliable results on api', { scrollBehavior: false }, () => {
    cy.visit('/');

    // renders searchbar
    cy.get('[data-testid="clear-btn"]').should('not.exist');
    cy.get('[type="search"]').should('be.visible');

    // searches for some results on API
    cy.get('[type="search"]').type('harry potter');
    cy.get('[type="submit"]').click();

    // TODO change assertion here
    cy.contains('Harry Potter and the Cham...').should('exist');
    cy.contains('Harry Potter and the Cham...').should('not.be.visible');

    cy.get('[data-testid="clear-btn"]').children('svg').should('be.visible');

    // clears the searchbar by clicking on the cross
    cy.get('[data-testid="clear-btn"]').children('svg').click();
    cy.get('[type="search"]').should('have.value', '');
    cy.get('[data-testid="clear-btn"]').should('not.exist');

    // shows no results message if nothing was found
    cy.get('[type="search"]').type('wuifhwifhwifhwhpfq');
    cy.get('[type="submit"]').click();

    cy.contains('Nothing was found 😔').should('be.visible');
  });

  it('saves submitted search value on moving between pages ', () => {
    cy.visit('/');

    // searches for some results on API
    cy.get('[type="search"]').type('javascript');
    cy.get('[type="submit"]').click();

    cy.contains('suggest book').click();
    cy.url().should('include', '/suggest');

    cy.contains('home').click();
    cy.get('[type="search"]').should('have.value', 'javascript');
  });
});
