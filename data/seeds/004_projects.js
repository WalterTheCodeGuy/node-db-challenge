
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'node-db-challenge', description: 'Making this awesome back end!', completed: 'true'},
      ]);
    });
};
