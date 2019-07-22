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
    addNewAction(req.body, req.params.id)
        .then(response => {
            res.status(201).json(response[0])
            })
            .catch(error => {
            res.status(500).json({Error: 'Internal Server Error'})
        })
    })

router.get('/projects/:id', (req, res) => {
    totalMethod(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' })
        })
})

router.get('/projects', (req, res) => {
    getAllProjects()
        .then(response => {
        res.status(200).json(response)
        })
        .catch(error => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
})

router.put('/projects/:id', (req, res) => {
    updateProject(req.body, req.params.id)
        .then(response => {
            console.log(response)
            res.status(201).json(response)
        })
        .catch(error => {
            console.log('Bad PAth')
            res.status(500).json({ Error: 'Internal Server Error' })
        })
})


module.exports = router;