const express = require('express');

const db = require('../schemes/action-helpers');

const router = express.Router();

router.post('/projects', (req, res) => {
    addNewProject(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' })
    })
})

router.post('/projects/:id/actions', (req, res) => {
    newAction = {
        Description: req.body.Description,
        Notes: req.body.Notes,
        Completed: req.body.Completed,
        Project_ID: req.params.id
    }
    addNewAction(newAction)
        .then(response => {
            res.status(201).json(response[0])
            })
            .catch(error => {
            res.status(500).json({Error: 'Internal Server Error'})
        })
    })

router.get('/projects/:id', (req, res) => {
    findProjectByIdToGetAll(req.params.id)
        .then(response => {
        const project = response
        findActionByIdForProject(req.params.id)
            .then(response => {
                    project.Actions = response
                  res.status(200).json(project)
                })
            // console.log(actions)
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' })
        })
})

module.exports = router;