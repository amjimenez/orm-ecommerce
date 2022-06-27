const router = require('express').Router();
const { Tag, Product, ProductTag, Category} = require('../../models');
const response = require("../../http/response");

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    let promise = ProductTag.findAll({
        include: {
            all: true,
            nested: true,
        },
    })
    response(promise, res)
});

router.get('/:id', (req, res) => {
    let promise = ProductTag.findOne({
        where: {
            id: req.params.id,
        },
        include: {
            all: true,
            nested: true,
        },
    })
    response(promise, res)
});

router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        tag_name: "history"
      }
    */
    Tag.create(req.body)
    .then((tag) => {
        res.status(200).json(tag);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
    Tag.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((tag) => {
        return Tag.findOne({ where: { id: req.params.id } });
    })
    .then((tag) => {
        res.status(200).json(tag)
    })
    .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id,
        },
    })
});

module.exports = router;