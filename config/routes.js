const express = require('express')
const router = express.Router()
const tasksCltr = require('../app/controllers/tasksCltr')
const categoriesCltr = require('../app/controllers/categoriesCltr')

router.get('/api/tasks', tasksCltr.list )
router.post('/api/tasks', tasksCltr.create) 
router.get('/api/tasks/:id', tasksCltr.show)

router.get('/api/categories', categoriesCltr.list)
router.post('/api/categories', categoriesCltr.create)
router.get('/api/categories/:id', categoriesCltr.show)
router.put('/api/categories/:id', categoriesCltr.update)
router.delete('/api/categories/:id', categoriesCltr.destroy)

module.exports = router 