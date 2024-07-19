import mongoose from "mongoose";
import {DB_HOST} from './configs/variables.js';

mongoose.connect(DB_HOST)
.then(db => console.log('DB is connected'))
.catch(err => console.log('Error connection to Mongodb: ',err));