const mongoose = require("mongoose");
const { deleteOne } = require("../src/student");

mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection
    .once("open", () => console.log("We are connected"))
    .on("error", (error) => {
        console.warn("An error occured", error)
    })

// supprimer les enregistrements avant l'execution
beforeEach((done) => {

    // reference directe à la collection students apres avoir fait l'association
    mongoose.connection.collections.students.drop();
    done()

    // pas plus d'une collection à la fois
    // const { students, comments, articleblogs } = mongoose.connection.collections;

    // students.drop(() => {
    //     comments.drop(() =>{
    //         articleblogs.drop(() => {
    //             done()
    //         })
    //     })
    // })

})  