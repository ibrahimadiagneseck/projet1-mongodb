const mongoose = require("mongoose");
const { deleteOne } = require("../src/student");

mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true,});

mongoose.connection
    .once("open", () => console.log("We are connected"))
    .on("error", (error) => {
        console.warn("An error occured", error)
    })

// supprimer les enregistrements avant l'execution
beforeEach((done) => {

    // reference directe à la collection students
    mongoose.connection.collections.students.drop();
    done()

    const { students, comments, articleblogs } = mongoose.connection.collections;

    // students.drop(() => {
    //     comments.drop(() =>{
    //         articleblogs.drop(() => {
    //             done()
    //         })
    //     })
    // })

})  