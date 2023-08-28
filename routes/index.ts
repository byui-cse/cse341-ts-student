// 'Router' is a middleware function provided by Express to create new router objects.
// 'Request' and 'Response' are types provided by Express.
import { Router } from 'express';
import * as controllers from '../controllers/index';

// Creating a new Router instance.
const router: Router = Router();

router.get('/', controllers.welcome);
router.get('/nathan', controllers.welcomeNathan);



// Exporting the router instance so it can be imported and used in other modules.
export default router;
