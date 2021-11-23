module.exports = {
  students: [],
  nextId: 1,
  find() {
    return this.students
  },
  findById(id) {
    return this.students.find(student => student.id === parseInt(id))
  },
  save(student) {
    const newStudent = {id: this.nextId, ...student }
    this.nextId++;
    this.students = [...this.students, newStudent]
    return newStudent
  },
  update(id, data) {
    this.students = this.students.map(student => {
      if (student.id === parseInt(id)) {
        return {
          ...student,
          ...data,
        }
      }
      return student
    })
    return this.findById(id)
  },
  delete(id) {
    this.students = this.students.filter(student => student.id !== parseInt(id))
    return id
  },
}