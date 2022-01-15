const Employee = require('../lib/Employee.js');

test('creates employee id', () => {
    console.log(Employee);
    expect(Employee).toContain(1);
});

