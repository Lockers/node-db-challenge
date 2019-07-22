
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        { Project: 'Project-1', Description: 'Description-1', Completed: 0 },
        { Project: 'Project-2', Description: 'Description-2', Completed: 0 },
        { Project: 'Project-3', Description: 'Description-3', Completed: 0 },
        { Project: 'Project-4', Description: 'Description-4', Completed: 0 },
        { Project: 'Project-5', Description: 'Description-5', Completed: 0 },
        { Project: 'Project-6', Description: 'Description-6', Completed: 0 },
        { Project: 'Project-7', Description: 'Description-7', Completed: 0 },
        { Project: 'Project-8', Description: 'Description-8', Completed: 0 },
        { Project: 'Project-9', Description: 'Description-9', Completed: 0 },
        { Project: 'Project-10', Description: 'Description-10', Completed: 0 },
      ]);
    });
};
