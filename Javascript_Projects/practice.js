const student = {
    name: "anu",
    age: 17,
    marks: 94,
    print: () => {
        console.log("printed");
    }
}

const teacher = {
    name: "bhanu",
    subject: "science"
}

teacher.__proto__ = student;

console.log(teacher.name);