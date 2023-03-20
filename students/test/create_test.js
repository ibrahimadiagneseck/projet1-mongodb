const assert = require("assert");
const Student = require("../src/student")

describe("Create the first data", () => {
    it("Save the student", (done) => {

        const ibrahima = new Student({name : "Ibrahima"});

        ibrahima.save()
        .then(() => {
            assert(!ibrahima.isNew) // boolean
            done()
        })
        
    })
});