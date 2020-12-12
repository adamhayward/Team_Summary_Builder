// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, id, email) {
        // throws error if user fails to input a name for the employee
        if (!name) {
            throw new Error("Woops, please ensure you enter the employee's full name.");
        }
        //  throws error if user fails to input an email address for the employee
        if (!email) {
            throw new Error("You are missing the hitPoints.");
        }
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;