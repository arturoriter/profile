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

const switchTheme = (backgroundColor: string, textColor: string) => {
  cy.get('#app').should($div => {
    expect($div).to.have.css(
      'background-color',
      Color(backgroundColor).string()
    );
    expect($div).to.have.css('color', Color(textColor).string());
    expect($div).to.have.css(
      'font-family',
      'Lato-Light, Arial, Helvetica, sans-serif'
    );
  });
};

describe('Profile test', () => {
  it('Visits the profile page', () => {
    cy.visit('#');
  });

  it('Should load all components', () => {
    loadAllComponents();
  });

  it('Should have light theme css', () => {
    switchTheme(LightTheme.page.backgroundColor, LightTheme.page.textColor);
  });

  it('Click on switch to dark mode button should change themes', () => {
    cy.checkAndClick('#themeBtn', 'Switch to Dark Mode');
    loadAllComponents();
  });

  it('Should have dark theme css', () => {
    switchTheme(DarkTheme.page.backgroundColor, DarkTheme.page.textColor);
  });

  it('Click on switch to light mode button should change themes', () => {
    cy.checkAndClick('#themeBtn', 'Switch to Light Mode');
    loadAllComponents();
  });

  it('Should have light theme css', () => {
    switchTheme(LightTheme.page.backgroundColor, LightTheme.page.textColor);
  });
});
