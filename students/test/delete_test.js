const assert = require("assert");
const Student = require("../src/student")

describe('Delete the records', () => {
    let ibrahima;
    let rosa

    beforeEach((done) =>{
        ibrahima = new Student({name: 'Ibrahima'})
        rosa = new Student({name : 'Rosa'})
        rosa.save()
        ibrahima.save()
        .then(() => done())
    })

    it('delete by id', done =>{
        Student.findByIdAndDelete(ibrahima._id)
        .then(() => Student.findOne({name: 'Ibrahima'}))
        .then((student) => {
            assert(student === null)
            done()
        })
    })

    it('delete by name', done =>{
        Student.findOneAndDelete({name: 'Ibrahima'})
        .then(() => Student.findOne({_id : ibrahima._id}))
        .then((student) => {
            assert(student === null)
            done()
        })
    })

    it('delete Ibrahima', done =>{
        Student.deleteOne({_id : ibrahima._id})
        .then(() => Student.findOne({name: 'Ibrahima'}))
        .then((student) => {
            assert(student === null)
            done()
        })
    })
})