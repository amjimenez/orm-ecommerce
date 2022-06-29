const router = require('express').Router();
const { Tag } = require('../../models');
const response = require("../../http/response");

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    let promise = Tag.findAll({
        include: {
            all: true,
            nested: true,
        },
    })
    response(promise, res)
});

router.get('/:id', (req, res) => {
    let promise = Tag.findOne({
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
    .then((data) => {
        res.status(200).json({id: req.params.id, "deleted": true})
    })
    .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
    })
});

module.exports = router;