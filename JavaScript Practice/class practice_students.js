const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

class Student {
  constructor(firstName, lastName, age, teacherName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.teachers = [teacherName];
  }

  addTeacher(teacherName) {
    this.teachers.push(teacherName);
  }

  findAllTeachers() {
    return this.teachers;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const student1 = new Student("John", "Doe", 25, "Peter Smith");
const student2 = new Student("Jane", "Doe", 23, "Zack Smith");

student1.addTeacher("Zack Smith");

console.log(student1.teachers);

console.log(student1.findAllTeachers());

console.log(student1.getFullName());
