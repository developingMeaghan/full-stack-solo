const magicData = require ('../data/data.json')

// console.log(magicData)

const data = Object.keys(magicData).map(magicName => ({
  id: magicData[magicName],
  name: magicName,
  releaseDate: magicData[magicName]
}))

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('magic').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('magic').insert(data),
      ])
    })
}
