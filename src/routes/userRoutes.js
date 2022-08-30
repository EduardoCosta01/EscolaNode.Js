import { Router } from 'express';
import userController from '../controllers/UserControllers ';
import loginRequired from '../middlrwares/loginRequired';
const routes = new Router();


// routes.get('/', userController.index);
// routes.get('/:id', userController.show);

routes.post('/', loginRequired, userController.store);
routes.put('/', loginRequired, userController.update);
routes.delete('/', loginRequired, userController.delete);



export default routes;


/*
metodos
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
