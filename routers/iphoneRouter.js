const ipController = require('../controllers/iphoneController');
const router = require('express').Router();

//get request
router.get('/', ipController.getIp);

//post(add)
router.post('/', ipController.addIp);

//update
router.put('/:id', ipController.updateIp);

//delete
router.delete('/:id', ipController.deleteIp);
router.delete('/', ipController.deleteAllIp);

module.exports = router;