
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Finish this Sprint', notes: 'some additional info', completed: 'true'},
      ]);
    });
};
