const magicData = require ('../data/data.json')

// console.log(magicData.decks)

const data = Object.keys(magicData.decks).map(magicName => ({
  id: magicName,
  name: magicData.decks[magicName].name,
  //object.array[].value
  releaseDate: magicData.decks[magicName].releaseDate
}));

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('magic').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('magic').insert(data.slice(400)),
      ])
    })
}
