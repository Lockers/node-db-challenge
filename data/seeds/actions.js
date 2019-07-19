
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        { Description: 'Actions-1', Notes: 'Notes-1', Completed: 0, Project_ID: 1 },
        { Description: 'Actions-2', Notes: 'Notes-2', Completed: 0, Project_ID: 1 },
        { Description: 'Actions-3', Notes: 'Notes-3', Completed: 0, Project_ID: 2 },
        { Description: 'Actions-4', Notes: 'Notes-4', Completed: 0, Project_ID: 2 },
        { Description: 'Actions-5', Notes: 'Notes-5', Completed: 0, Project_ID: 3 },
        { Description: 'Actions-6', Notes: 'Notes-6', Completed: 0, Project_ID: 3 },
        { Description: 'Actions-7', Notes: 'Notes-7', Completed: 0, Project_ID: 4 },
        { Description: 'Actions-8', Notes: 'Notes-8', Completed: 0, Project_ID: 4 },
        { Description: 'Actions-9', Notes: 'Notes-9', Completed: 0, Project_ID: 5 },
        { Description: 'Actions-10', Notes: 'Notes-10', Completed: 0, Project_ID: 5 },
        { Description: 'Actions-10', Notes: 'Notes-11', Completed: 0, Project_ID: 6 },
        { Description: 'Actions-10', Notes: 'Notes-12', Completed: 0, Project_ID: 6 },
        { Description: 'Actions-10', Notes: 'Notes-13', Completed: 0, Project_ID: 7 },
        { Description: 'Actions-10', Notes: 'Notes-14', Completed: 0, Project_ID: 7 },
        { Description: 'Actions-10', Notes: 'Notes-15', Completed: 0, Project_ID: 8 },
        { Description: 'Actions-10', Notes: 'Notes-16', Completed: 0, Project_ID: 8 },
        { Description: 'Actions-10', Notes: 'Notes-17', Completed: 0, Project_ID: 9 },
        { Description: 'Actions-10', Notes: 'Notes-18', Completed: 0, Project_ID: 9 },
        { Description: 'Actions-10', Notes: 'Notes-19', Completed: 0, Project_ID: 10 },
        { Description: 'Actions-10', Notes: 'Notes-20', Completed: 0, Project_ID: 10 },
      ]);
    });
};
