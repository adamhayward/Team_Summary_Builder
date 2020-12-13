// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
class Employee {
    constructor(name, role, id, email) {
        // throws error if user fails to input a name for the employee
        if (!name) {
            throw new Error("Woops, please ensure you enter the employee's full name.");
        }
        //  throws error if user fails to input an email address for the employee
        if (!email) {
            throw new Error("Please enter email for the emloyee.");
        }
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
    
    printinfo() {
        console.log(`${this.name}\n${this.role}\n${this.id}\n${this.email}`)
    }
}



module.exports = Employee;