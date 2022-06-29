const router = require('express').Router();
const { Category, Product, ProductTag} = require('../../models');
const { Op } = require("sequelize");
const response = require('../../http/response');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    let promise = Category.findAll({
        include: {
            all: true,
        },
    })
    response(promise, res)
});

router.get('/:id', (req, res) => {
    let promise = Category.findOne({
        where: {
            id: req.params.id,
        },
        include: {
            all: true,
        },
    })
    response(promise, res)
});

router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        category_name: "Sports"
      }
    */
    Category.create(req.body)
    .then((category) => {
        res.status(200).json(category);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
    Category.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((category) => {
        return Category.findOne({ where: { id: req.params.id } });
    })
    .then((category) => {
        res.status(200).json(category)
    })
    .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((data) => {
        res.status(200).json({id: req.params.id, "deleted": true})
    })
    .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
    })
})

module.exports = router;