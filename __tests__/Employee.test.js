const Employee = require('../lib/Employee.js');
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

test('creates employee object instance', () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringMatching(emailRegEx));
});

test("gets an employee's name", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getName()).toEqual(expect.any(String));
})

test("gets an employee's id", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getId()).toEqual(expect.any(Number));
})

test("gets an employee's email", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getEmail()).toEqual(expect.stringMatching(emailRegEx));
})

test("gets an employee's role", () => {
  const employee = new Employee('John Smith', 1, 'john@email.com');
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})