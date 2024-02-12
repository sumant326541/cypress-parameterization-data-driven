
describe('data driven using test data in test file', () => {

     //Test data for data driven test
  const testData = [
    { country: 'us', postalCode: '90210', placeName: 'Beverly Hills' },
    { country: 'us', postalCode: '12345', placeName: 'Schenectady' },
    { country: 'ca', postalCode: 'B2R', placeName: 'Waverley' },
  ];


  testData.forEach(({ country, postalCode, placeName}) => {
    it(`should verify data from above test data`, () => {
      cy.log(country)
      cy.log(postalCode)
      cy.log(placeName)

    })
  });
})