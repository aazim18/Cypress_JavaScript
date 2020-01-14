describe('Testing Wikipedia', () => {
  it('A user can switch languages', () => {
    cy.visit('https://wikipedia.org');
    cy.contains('Read Wikipedia in your language');
    cy.get('#js-lang-list-button').click();
    cy.contains('Yorùbá').click();
    cy.url().should(
      'equal',
      'https://yo.wikipedia.org/wiki/Oj%C3%BAew%C3%A9_%C3%80k%E1%BB%8D%CC%81k%E1%BB%8D%CC%81',
    );
    cy.contains('Ẹ kú àbọ̀');
  });
});
