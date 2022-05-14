const {Router} = require('express');

const {activateCard} = require('../controllers/card');

const router = Router();

router.post('/', activateCard);

module.exports = router;