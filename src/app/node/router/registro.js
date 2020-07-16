import { Router } from 'express';
let router= Router();
import {crear} from '../controller/registro';




//Rutas
router.post('/', crear);





export default router;