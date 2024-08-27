import {Router} from 'express';
import {addStudent,createStudent,listStudents,deleteStudent} from '../controllers/students.controller.js';

const router = Router();

router.get('/add',addStudent);

router.post('/new-student',createStudent);

router.get('/all',listStudents);

router.delete('/delete/:id',deleteStudent);

export default router;