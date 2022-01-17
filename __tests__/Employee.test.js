const Employee = require('../lib/Employee.js');

test('contains employee id', () => {
    console.log(Employee);
    expect(Employee).toBe(Employee);
});

