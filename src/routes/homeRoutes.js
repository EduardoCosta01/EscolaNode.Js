import { Router } from 'express';
import homeController from '../controllers/HomeControllers';

const routes = new Router();

routes.get('/', homeController.index )



export default routes;
