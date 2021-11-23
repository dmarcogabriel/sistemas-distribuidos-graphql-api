const StudentModel = require('./student.model')

module.exports = {
  students() {
    try {
      return StudentModel.find()
    } catch (error) {
      return []
    }
  },
  student({ id }) {
    try {
     return StudentModel.findById(id)
    } catch (error) {
      return null
    }
  },
  createStudent(student) {
    try {
      return StudentModel.save(student)
    } catch (error) {
      return null
    }
  },
  updateStudent({ id, ...data }) {
    try {
      return StudentModel.update(id, data)
    } catch (error) {
      return null
    }
  },
  deleteStudent({ id }) {
    try {
      return StudentModel.delete(id)
    } catch (error) {
      return null
    }
  },
}