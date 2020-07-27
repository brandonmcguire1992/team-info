const Intern = require('../lib/Intern');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


test('check properties inherited from Employee', () => {
  const intern = new Intern('John Smith', 1, 'john@email.com', 'U of X');

  expect(intern).toHaveProperty('name', expect.any(String));
  expect(intern).toHaveProperty('id', expect.any(Number));
  expect(intern).toHaveProperty('email', expect.stringMatching(emailRegEx));
})

test('check intern has school name', () => {
  const intern = new Intern('John Smith', 1, 'john@email.com', 'U of A');

  expect(intern).toHaveProperty('school', expect.any(String));
}); 

test('outputs string with users school name', () => {
	const intern = new Intern('John Smith', 1, 'john@email.com', 'U of X');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("outputs string with intern's role", () => {
	const intern = new Intern('John Smith', 1, 'john@email.com', 'U of X');

	expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});