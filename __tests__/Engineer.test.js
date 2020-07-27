const Engineer = require('../lib/Engineer');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

test('check properties inherited from Employee', () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz');

	expect(engineer).toHaveProperty('name', expect.any(String));
	expect(engineer).toHaveProperty('id', expect.any(Number));
	expect(engineer).toHaveProperty('email', expect.stringMatching(emailRegEx));
});

test('check own property github name', () => {
  const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz' );

  expect(engineer).toHaveProperty('github', expect.any(String));
}); 

test("outputs string with a engineer's github name", () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz');

	expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("outputs string with engineer's role", () => {
	const engineer = new Engineer('John Smith', 1, 'john@email.com', 'gitboiz');

	expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});