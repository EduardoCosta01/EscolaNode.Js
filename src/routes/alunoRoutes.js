import { Router } from 'express';
import alunoController from '../controllers/AlunoControllers';

import loginRequired from '../middlrwares/loginRequired';

const routes = new Router();

routes.get('/', alunoController.index );
routes.post('/', loginRequired, alunoController.store );
routes.put('/:id', loginRequired, alunoController.update );
routes.get('/:id', alunoController.show );
routes.delete('/:id', loginRequired, alunoController.delete );



export default routes;
