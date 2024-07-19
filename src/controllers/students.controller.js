import Student from '../models/student.model.js';

export const addStudent = (req, res) => {
    res.render('students/add-student');
};
export const createStudent = async (req, res) => {
    const { name, last_name, ci, birth, address } = req.body;
    const errors = [];
    if (!name) {
        errors.push({ text: 'Por favor agregue un nombre' });
    };
    if (!last_name) {
        errors.push({ text: 'Por favor agregue un apellido' });
    };
    if (!ci) {
        errors.push({ text: 'Por favor agregue un numero de cedula' });
    } else {
        const ciStudent = await Student.findOne({ ci: ci });
        if (ciStudent) {
            errors.push({ text: 'El numero de cedula ya se encuneta registrado' });
        };
    };
    if (!birth) {
        errors.push({ text: 'Por favor agregue una fecha de nacimiento' });
    };
    if (!address) {
        errors.push({ text: 'Por favor agregue una dirreccion' });
    };
    if (errors.length > 0) {
        res.render('students/add-student', {
            errors, name, last_name, ci, birth, address
        });
    } else {
        const newStudent = new Student({ name, lastname: last_name, ci, birthdate: birth, address });
        await newStudent.save()
        res.render('students/add-student');
    };

    export const deleteStudent = (req, res){
        res.send('eliminar alumno');
    };

};
