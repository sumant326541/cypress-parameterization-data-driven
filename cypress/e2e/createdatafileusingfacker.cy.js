describe('create data using facker', () => {
  it(`should generate data file and read them`, () => {
    cy.generateRandomData('createduserdata')

    cy.fixture("createduserdata").then((data) => {
      cy.log(data.email);
      cy.log(data.name);

    })
  })
})