const express = require('express');
const router = express.Router();
const homeController = require('../Controllers/homeController')


router.get('/', homeController.getHomes)

router.get('/:id', homeController.getHomeId)

router.post('/', homeController.createHome)

router.put('/:id', homeController.updateHomeId)

router.delete('/:id', homeController.deleteHomeId)

module.exports = router;