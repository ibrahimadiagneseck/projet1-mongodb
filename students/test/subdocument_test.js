const assert = require('assert');
const Student = require('../src/student');

describe('Subdocument', () => {

//     it('Creating a subdocument', done => {
//         const ibrahima = new Student({
//             name : 'Ibrahima',
//             articles : [{title: 'JavaScript'}]
//         })

//         ibrahima.save()
//         .then(() => {
//             Student.findOne({name: 'Ibrahima'})
//             .then(student => {
//                 assert(student.articles[0].title === 'JavaScript')
//                 done()
//             })
//         })
//     })

    it('Adding new record', done =>{
        const ibrahima = new Student({name: 'Ibrahima', articles: []})

        ibrahima.save()
        .then(() => Student.findOne({name: 'Ibrahima'}))
        .then(student => {
            student.articles.push({title: 'MongoDB'})
            return student.save()
        })
        .then(() => Student.findOne({name: 'Ibrahima'}))
        .then(student => {
            assert(student.articles[0].title === 'MongoDB')
            done()
        })
    })

    // it('Remove the records', function(done) {
        
    //     const ibrahima = new Student({name: 'Ibrahima', articles: [{title: 'React Native'}]})

    //     ibrahima.save()
    //     .then(() => Student.findOne({name: 'Ibrahima'}))
    //     .then(student => {
    //         student.articles[0].remove()
    //         return student.save()
    //     })
    //     .then(() => Student.findOne({name: 'Ibrahima'}))
    //     .then(student => {
    //         assert(student.articles.length === 0)
    //         done()
    //     })
        
    // })

    
})