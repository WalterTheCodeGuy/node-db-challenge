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

// GET all tasks

router.get('/', (req, res) => {
    db('tasks')
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve tasks', error });
        });
});

// POST a new task

router.post('/', (req, res) => {
    const taskData = req.body;
    db('tasks').insert(taskData)
        .then(ids => {
            db('tasks').where({ id: ids[0] })
                .then(newTaskEntry => {
                    res.status(201).json(newTaskEntry);
                });
        })
        .catch(error => {
            console.log('POST error for tasks', error);
            res.status(500).json({ message: 'Failed to store data' });
        });
});

module.exports = router;