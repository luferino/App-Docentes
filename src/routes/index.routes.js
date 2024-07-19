import {Router} from 'express';
import {initPage} from '../controllers/index.controller.js';

const router = Router();

router.get('/',initPage);

export default router;