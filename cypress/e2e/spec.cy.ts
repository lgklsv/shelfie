describe('Navigation between pages', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
});
