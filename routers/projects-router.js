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

// GET all projects

router.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({message: 'Failed to retrieve projects', error});
    });
});

// POST a new project

router.post('/', (req, res) => {
  const projectData = req.body;
  db('projects').insert(projectData)
    .then(ids => {
      db('projects').where({ id: ids[0] })
        .then(newProjectEntry => {
          res.status(201).json(newProjectEntry);
        });
    })
    .catch(error => {
      console.log('POST error for projects', error);
      res.status(500).json({ message: 'Failed to store data' });
    });
});

module.exports = router;