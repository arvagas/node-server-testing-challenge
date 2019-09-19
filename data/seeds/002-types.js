
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types')
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {type: 'meat'},
        {type: 'grain'},
        {type: 'vegetable'},
        {type: 'fruit'},
      ]);
    });
};
