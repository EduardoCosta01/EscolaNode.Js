import { Router } from 'express';

import loginRequired from '../middlrwares/loginRequired'
import fotoController from '../controllers/FotoControllers';

const routes = new Router();

routes.post('/', loginRequired, fotoController.store )

export default routes;
