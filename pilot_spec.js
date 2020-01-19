describe('Testing bayzat', () => {
  it('I can log into dashboard', () => {
    cy.visit('https://www.bayzat.com');
    cy.contains('Bayzat is a technology company');
    cy.contains('Login').click();
    cy.get("input[type='email']").type('test+testcompany@bayzat.com');
    cy.get("input[type='password']").type('123456789');
    cy.get("button[type='submit']").click();
    cy.url().should(
      'equal',
      'https://www.bayzat.com/enterprise/dashboard/index',
    );
    cy.contains('View Team').click();
    cy.contains('View all of your team members');
    cy.contains('Add Employees').click();
    cy.contains('Add Employee').click();
    cy.get("input[name='firstName']").type('pilot');
    cy.get("input[name='lastName']").type('test3');
    cy.get("input[type='email']").type('pilottest3@bayzat.com');
    cy.contains('Create and add another').click();
    
    //cy.get("input[name='firstName']").clear() 
    //cy.get("input[name='firstName']").type('pilot');
    //cy.get("input[name='lastName']").clear()
    //cy.get("input[name='lastName']").type('test2');
    //cy.get("input[type='email']").clear()
    //cy.get("input[type='email']").type('pilottest2@bayzat.com');
    //cy.contains('Create and add another').click();
    
    cy.contains('View Team').click();
    cy.get("input[type='search']").type('pilot');
    cy.contains('Logout').click();
    cy.url().should(
      'equal',
      'https://www.bayzat.com/enterprise/dashboard/login',
    );
  });
});
