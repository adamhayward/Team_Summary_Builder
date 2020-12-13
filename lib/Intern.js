// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    onstructor(name, id, email, school) {
        super(name, id, email)
        this.gitHub = gitHub
    };
    getName() {
        return this.name;
    };
    getID() {
        return this.id;
    };
    getEmail() {
        return this.emial;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return this.Intern;
    };

}

module.exports = Intern;