const Task = require('../models/task')
const tasksCltr = { }

tasksCltr.list = (req, res) => {
    Task.find()
        .then((tasks) => {
            res.json(tasks)
        })
        .catch((err) => {
            res.json(err)
        })
}

tasksCltr.create = (req, res) => {
    const body = req.body
    const task = new Task(body)
    task.save()
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}

tasksCltr.show = (req, res) => {
    const id = req.params.id
    Task.findById(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = tasksCltr