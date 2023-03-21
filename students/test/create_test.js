const assert = require("assert");
const Student = require("../src/student")

describe("Create the first data", () => {

    it("Save the studet", (done) => {
        const ibrahima = new Student({name :"Ibrahima"});

        ibrahima.save()
        .then(() => { // notification que ibrahima (modele) est sans probleme
            assert(!ibrahima.isNew) // boolean qui doit etre vrai
            done()
        })
    })
});