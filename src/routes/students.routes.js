import {Router} from 'express';
import {addStudent,createStudent} from '../controllers/students.controller.js';

const router = Router();

router.get('/add',addStudent);

router.post('/new-student',createStudent);

export default router;