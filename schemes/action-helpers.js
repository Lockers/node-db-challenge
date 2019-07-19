const knex = require('knex');
const db = knex(require('../knexfile').development);

findProjectById = (id) => {
    return db('Projects').where({ 'Projects.id': id })
}
findActionById = (id) => {
    return db('Actions').where({ 'Actions.id': id })
}
findActionByIdForProject = (id) => {
    return db('Actions').where({ 'Project_ID': id })
}

findProjectByIdToGetAll = (id) => {
    return db('Projects').where({ 'Projects.id': id })
        .then(response => {
            return response = response[0]
        })
}

addNewProject = (newProject) => {
    return db('Projects')
        .insert(newProject)
        .then(response => {
            return findProjectById(response[0])
                .then(response => {
                    return response[0]
                })
        })
}

addNewAction = (newAction, id) => {
    return db('Actions')
        .insert(newAction)
        .where({ 'Project_ID': id })
        .then(response => {
            return findActionById(response[0])
        })
}

module.exports = {
    addNewProject,
    findProjectById,
    addNewAction,
    findActionById,
    findProjectByIdToGetAll,
    findActionByIdForProject
}