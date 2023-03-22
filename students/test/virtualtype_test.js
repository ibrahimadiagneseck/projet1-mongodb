const assert = require('assert')
const Student = require('../src/student')

describe('Virtual types', () => {

    it('article counts', done => {
        const ibrahima = new Student({name: 'Ibrahima', articles :[{title : 'First Title'}]})

        ibrahima.save()
        .then(()=> Student.findOne({name: 'Ibrahima'}))
        .then(student => {
            assert(student.articleCount === 1)
            done()
        })
    })
})