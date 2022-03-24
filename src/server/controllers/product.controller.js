const {Product} = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    });
}

module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(err => res.status(400).json(err))
}

module.exports.findAllProducts = (req, res)=> {
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.status(400).json(err));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.status(400).json(err))
}

module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteOneProduct => res.json(deleteOneProduct))
    .catch(err => res.status(400).json(err))
}

