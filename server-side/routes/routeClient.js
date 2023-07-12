const router = require('express').Router();
const ClientController = require('../controllers/client');
const errorHandler = require('../middlewares/errorHandler');
const authenticationMiddleware = require('../middlewares/authentication');

router.post('/register', ClientController.register);
router.post('/sign-in', ClientController.signIn);

router.use(authenticationMiddleware);
router.get('/jobs', ClientController.getJobs);
router.get('/job/:id', ClientController.getJobDetail);

router.use(errorHandler);

module.exports = router;
