import express from 'express';
import session from 'express-session';
import path from 'path';
import {PORT} from './configs/variables.js';
import {engine} from 'express-handlebars';
import methodOverride from 'method-override';
import sessionConfig from './configs/session.js';
import {fileURLToPath} from 'url';
import flash from 'connect-flash';

//Imports for Routes
import init from './routes/index.routes.js';
import students from './routes/students.routes.js';

// __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Initializations
const app = express();
import './database.js';

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',engine({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session(sessionConfig));
app.use(flash());

// Globals Variables
app.use((req, res, next)=>{
    res.locals.error_msg = req.flash('error_msg');
    res.locals.success_msg = req.flash('success_msg');
    next();
});


// Routes
app.use('/',init);
app.use('/student',students);

//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server is Listening
app.listen(PORT);
console.log('Server on port: ',PORT);