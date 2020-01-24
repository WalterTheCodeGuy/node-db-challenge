exports.up = function (knex) {
  return knex.schema.createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 50)
          .notNullable()
          .unique();
      tbl.string('description', 128)
          .notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resources');
};
