import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swaggerDesign.json';

const router: Router = Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
