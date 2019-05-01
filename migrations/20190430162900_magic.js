exports.up = function(knex, Promise) {
    return knex.schema.createTable('magic', table =>{
        table.increments('id').primary()
        table.string('name')
        table.string('releaseDate')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('magic')
  
};
