// const mongoose = require('mongoose');
const Student = require('../src/student');
const Comment = require('../src/comment');
const ArticleBlog = require('../src/articleBlog');
const assert = require('assert');

describe('Association Test', () => {
    let ibrahima, articleBlog, comment;

    beforeEach(done => {
        ibrahima = new Student({name: 'Ibrahima'});
        articleBlog = new ArticleBlog({title: 'MongoDb', content: 'Mongoose and Mocha'});
        comment = new Comment({content: 'Well done!'})

        ibrahima.articleBlog.push(articleBlog);
        articleBlog.comments.push(comment);
        comment.students = ibrahima;

        Promise.all([ibrahima.save(), articleBlog.save(), comment.save()])
        .then(() => done())
    })

    it('Associate student with articleBlog', done => {
        Student.findOne({name: 'Ibrahima'})
        .populate('articleBlog') // fichier associer
        .then(student => {
            assert(student.articleBlog[0].title === 'MongoDb')
        })
        done()
    })

    // aucun autre test doit etre executer
    it.only('Nested populate', done=> {
        Student.findOne({name: 'Ibrahima'})
        .populate({
            path: 'articleBlog', // tous les articleBlog
            populate: {
                path: 'comments', // tous les commentaires associes articleBlog
                model: 'comment',
                populate: {
                    path: 'students', // tous les students associes comments
                    model: 'student'
                }
            }
        })
        .then(student => {
            assert(student.name === 'Ibrahima')
            assert(student.articleBlog[0].title == 'MongoDb')
            assert(student.articleBlog[0].comments[0].content === 'Well done!')
            assert(student.articleBlog[0].comments[0].students.name === 'Ibrahima')
            done()
        })  
    })
})