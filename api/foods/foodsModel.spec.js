const Foods = require('./foods-model')
const db = require('../../data/db-config')

describe('Foods Model', () => {
  beforeEach(async () => {
    await db('foods').truncate()
  })

  it('should set environment to testing', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  describe('find() method', () => {
    it('should get all foods in the db', async () => {
      let food = await Foods.find()
      
      expect(food).toHaveLength(0)
    })

    it('should get all foods in the db', async () => {
      Foods.add({ name: 'bread' })

      let allFood = await Foods.find()
      
      expect(allFood).toHaveLength(1)
    })
  })

  describe('add() method', () => {
    it('should add a new food in the db', async () => {
      await Foods.add({ name: 'bread' })

      let food = await db('foods')
      
      expect(food).toHaveLength(1)
    })

    it('should add a new food in the db', async () => {
      const [id] = await Foods.add({ name: 'bread' })

      let food = await db('foods')
        .where({ id })
        .first()
      
      expect(food.name).toBe('bread')
    })
  })

  describe('remove() method', () => {
    it('should remove food in the db', async () => {
      let food = ''

      const [id] = await Foods.add({ name: 'bread' })

      food = await db('foods')
      
      expect(food).toHaveLength(1)

      await Foods.remove(id)
      
      food = await db('foods')
      
      expect(food).toHaveLength(0)
    })
  })
})