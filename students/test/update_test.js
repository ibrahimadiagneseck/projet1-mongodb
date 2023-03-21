const assert = require("assert");
const Student = require("../src/student");

describe("Updating records", () => {

  let ibrahima;
  // let ibrahima2;

  beforeEach((done) => {
    ibrahima = new Student({ name: "Ibrahima", studentNumber:2500, articleCount: 5, grade:10});
    ibrahima.save().then(() => done());
  });

//   it("set and save", (done) => {
//     console.log(ibrahima);
//     ibrahima.set("name", "Alex");
//     ibrahima.save()
//     .then(() => Student.find({}))
//     .then((students) => {
//         assert(students[0].name === "Alex");
//         done();
//       });
//   });

    // it('Update one of the Ibrahimas', async() => {
    //     const student = await Student.updateOne({name: 'Ibrahima'}, {studentNumber: 3000})
    //     const res = await Student.find({})
    //     assert(res[0].studentNumber === 3000)
    //     console.log(res)
    // })

    // it('Update Ibrahimas', async() => {
    //     const student = await Student.updateMany({name: 'Ibrahima'}, {studentNumber: 3000})
    //     const res = await Student.find({})
    //     assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000)
    //     console.log(res)
    // })

    xit('Update grades', async () =>{
        const artCount = await Student.findOne({name: 'Ibrahima'})
        const student = await Student.updateOne({name:'Ibrahima'}, {$mul: {grade: artCount.articleCount }})
        const res = await Student.find({name: 'Ibrahima'})
        assert(res[0].grade === 50)
        console.log(res)
    })
});
