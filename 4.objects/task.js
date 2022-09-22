function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(mark);
}

Student.prototype.addMarks = function (... marks) {
  for (let i = 0; i < marks.length; i++)
    this.addMark(marks[i]);
}

Student.prototype.getAverage = function () {
  if (this.marks  === undefined) {
    //Тут бы как-то уведомить вызывающего о невозможности вычислить средний бал.
    return undefined;
  }
  let sum = 0;
  this.marks.every(item => sum += item);
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


// Код для проверки и отладки
let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); // 4.666666666666667
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}