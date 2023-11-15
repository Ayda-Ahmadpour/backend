import express from 'express'

import { addStudent } from '../controllers/students.controllers.js'

const router = express.Router()

// this is === /students
// router.get('/', getStudents) //GET all students
router.post('/', addStudent) // ADD a new student
// router.get('/:id', getStudent) // GET a single student by id
// router.put() // UPDATE a student
// router.delete() // DElETE a student
// http:localhost:5000/api/stuedent/id

export default router