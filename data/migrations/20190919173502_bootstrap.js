
exports.up = function(knex) {
  return knex.schema
    .createTable('foods', tbl => {
      tbl.increments()
      tbl.string('name', 128).unique().notNullable()
    })
    .createTable('types', tbl => {
      tbl.increments()
      tbl.string('type', 128).unique().notNullable()
    })
    .createTable('foods_types', tbl => {
      tbl.integer('food_id').unsigned().notNullable().references('id').inTable('foods').onUpdate('CASCADE').onDelete('CASCADE')
      tbl.integer('type_id').unsigned().notNullable().references('id').inTable('types').onUpdate('CASCADE').onDelete('CASCADE')
      tbl.primary(['food_id', 'type_id'])
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('foods_types')
    .dropTableIfExists('types')
    .dropTableIfExists('foods')  
}
