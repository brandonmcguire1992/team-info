const Manager = require('../lib/Manager');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

test('check properties inherited from Employee', () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager).toHaveProperty('name', expect.any(String));
  expect(manager).toHaveProperty('id', expect.any(Number));
  expect(manager).toHaveProperty('email', expect.stringMatching(emailRegEx));
})

test('check manager has office number', () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager).toHaveProperty('officeNumber', expect.any(Number));
}); 

test("outputs string with a manager's office number", () => {
	const manager = new Manager('John Smith', 1, 'john@email.com', 123);

	expect(manager.getOfficeNumber()).toEqual(expect.stringContaining((manager.officeNumber).toString()));
});

test("outputs string with manager's role", () => {
  const manager = new Manager('John Smith', 1, 'john@email.com', 123);

  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})