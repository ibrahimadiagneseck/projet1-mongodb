const assert = require('assert');
const Student = require('../src/student');

describe("Read the data", () => {
    let ibrahima;
    let ibrahima2;

    beforeEach((done) =>{
        ibrahima = new Student({name: 'Ibrahima'});
        ibrahima2 = new Student({name: 'Ibrahima'});

        ibrahima.save()
        ibrahima2.save()
        .then(() => done())

        console.log(ibrahima);
        console.log(ibrahima2);
    })

    // it('Find all Ibrahimas', async () =>{
    //     const students = await Student.find({name: 'Ibrahima'})
    //     console.log(students)
    //     assert(students[0]._id.toString() === ibrahima._id.toString())
    // })

    it('Find one of the Ibrahimas', async () =>{
        const students = await Student.findOne({_id : ibrahima._id});
        console.log(students)
        assert(students.name === 'Ibrahima')
    })
})