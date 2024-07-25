const express = require('express');
const {getClass, registerClass, deleteClass, getClassByCode, verifyConflit}= require('./controllers/classController.js');
const router = express.Router();

router.post('/conflict', verifyConflit);
router.get('/', getClass);
router.post('/', registerClass);
router.delete('/', deleteClass);

module.exports=router;