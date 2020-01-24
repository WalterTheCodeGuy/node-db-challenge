exports.up = function (knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 50)
          .notNullable()
          .unique();
      tbl.string('description', 200)
          .notNullable()
          .unique();
      tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
