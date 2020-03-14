import { LightTheme } from '../../src/data/LightTheme';
import { DarkTheme } from '../../src/data/DarkTheme';
import * as Color from 'color';

const loadAllComponents = () => {
  cy.get('#header').should('exist');
  cy.get('#summary').should('exist');
  cy.get('#skills').should('exist');
  cy.get('#experiences').should('exist');
  cy.get('#education').should('exist');
  cy.get('#certifications').should('exist');
  cy.get('#languages').should('exist');
  cy.get('#footer').should('exist');
};

describe('Profile test', () => {
  it('Visits the profile page', () => {
    cy.visit('#');
  });

  it('Should load all components', () => {
    loadAllComponents();
  });

  it('Should have light theme css', () => {
    cy.get('#app').should($div => {
      expect($div).to.have.css(
        'background-color',
        Color(LightTheme.page.backgroundColor).string()
      );
      expect($div).to.have.css(
        'color',
        Color(LightTheme.page.textColor).string()
      );
      expect($div).to.have.css(
        'font-family',
        'Lato-Light, Arial, Helvetica, sans-serif'
      );
    });
  });

  it('Click on switch to dark mode button should change themes', () => {
    cy.get('#themeBtn').click();
    loadAllComponents();
  });

  it('Should have dark theme css', () => {
    cy.get('#app').should($div => {
      expect($div).to.have.css(
        'background-color',
        Color(DarkTheme.page.backgroundColor).string()
      );
      expect($div).to.have.css(
        'color',
        Color(DarkTheme.page.textColor).string()
      );
      expect($div).to.have.css(
        'font-family',
        'Lato-Light, Arial, Helvetica, sans-serif'
      );
    });
  });
});
