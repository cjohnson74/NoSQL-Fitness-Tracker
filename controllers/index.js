const router = require('express').Router();
const views = require('./view');
const apiRoutes = require('./api');


router.use('/', views);
router.use('/api', apiRoutes);

module.exports = router;
