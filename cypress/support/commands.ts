export {};
declare global {
  namespace Cypress {
    interface Chainable {
      checkAndClick: (
        selector: string,
        contains?: string
      ) => Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('checkAndClick', (selector: string, contains?: string) => {
  let chain = cy.get(selector);

  if (contains) {
    chain = chain.contains(contains);
  }

  return chain.should('be.visible').click();
});
