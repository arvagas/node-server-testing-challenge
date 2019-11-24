const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  add,
  remove,
}

function find() {
  return db('foods')
    .then(food => food)
}

function findById(id) {
  return db('foods')
    .where({ id })
    .first()
    .then(food => food)
}

function add(newFood) {
  return db('foods')
    .insert(newFood, 'id')
    .then(idArr => idArr)
}

function remove(id) {
  return findById(id)
    .then(res => {
      db('foods')
        .del(id)
        .then(() => res)
    })
}