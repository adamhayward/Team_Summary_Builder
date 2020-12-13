// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, role, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
}

const manager = new Manager ()

module.exports = Manager;