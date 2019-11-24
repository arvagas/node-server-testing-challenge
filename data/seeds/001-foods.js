
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods')
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {name: 'chicken'},
        {name: 'carrot'},
        {name: 'pork'},
        {name: 'apple'},
        {name: 'orange'},
        {name: 'mango'},
        {name: 'rice'},
      ]);
    });
};
