
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('description', 200)
      .notNullable()
      .unique();
    tbl.string('notes', 200)
      .notNullable()
      .unique();
    tbl.boolean('completed')
      .notNullable()
      .defaultTo(false);  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
