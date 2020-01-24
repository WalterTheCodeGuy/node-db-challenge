const express = require('express');
const knex = require('knex');
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './data/organization.db3'
    },
    useNullAsDefault: true
});

const router = express.Router();
router.use(express.json());

// GET all resources

router.get('/', (req, res) => {
    db('resources')
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve resources', error });
        });
});

// POST a new resource

router.post('/', (req, res) => {
    const resourceData = req.body;
    db('resources').insert(resourceData)
        .then(ids => {
            db('resources').where({ id: ids[0] })
                .then(newResourceEntry => {
                    res.status(201).json(newResourceEntry);
                });
        })
        .catch(error => {
            console.log('POST error for resources', error);
            res.status(500).json({ message: 'Failed to store data' });
        });
});

module.exports = router;