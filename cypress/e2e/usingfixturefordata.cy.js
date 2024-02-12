const testData = require('../fixtures/data1.json');
describe('data-driven using json data', () => {
  Object.keys(testData).forEach((userdata) => {
    it(`read ${userdata} data from data1.json`, function () {
      const { username, password } = testData[userdata];
      cy.log(username)
      cy.log(password)

    })
  });
})