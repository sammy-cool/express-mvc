const Category = require('../models/category')
const categoriesCltr = {}

categoriesCltr.list = (req,res) => {
    Category.find()
        .then((categories) => {
            res.json(categories)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCltr.create = (req, res) => {
    const body = req.body 
    const category = new Category(body)
    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCltr.show = (req, res) => {
    const id = req.params.id 
    Category.findById(id)
        .then((category) => {
            res.json(category)
        })
        .catch((err)=> {
            res.json(err)
        })
}

categoriesCltr.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Category.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCltr.destroy = (req, res) => {
    const id = req.params.id 
    Category.findByIdAndDelete(id)
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = categoriesCltr