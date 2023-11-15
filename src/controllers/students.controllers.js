import Student from "../models/students.model.js";

export const addStudent = async (req, res) => {
    try {
        // the req body is json
        // req=> request
        // we are just creating the models
        const newStudent = new Student(req.body)
        // save data to the data base
        await newStudent.save() 
        
        // if the connection was succeful send the data to the frontend
        res.status(201).send(newStudent)
    } catch(err) {
        res.status(400).send(err)
    }
}

// export const getStudents = async (req, res) => {
//     try {
//         const 
//     } catch (error) {
        
//     }
// }
