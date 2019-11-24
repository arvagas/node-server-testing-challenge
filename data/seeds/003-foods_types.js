
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods_types')
    .then(function () {
      // Inserts seed entries
      return knex('foods_types').insert([
        {food_id: '1', type_id: '1'},
        {food_id: '2', type_id: '3'},
        {food_id: '3', type_id: '1'},
        {food_id: '4', type_id: '4'},
        {food_id: '5', type_id: '4'},
        {food_id: '6', type_id: '4'},
        {food_id: '7', type_id: '2'},
      ]);
    });
};
