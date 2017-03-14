'use strict'

const Schema = use('Schema')

class FollowersTableSchema extends Schema {

  up () {
    this.create('followers', (table) => {
      table.increments()
      table.string('username')
      table.string('following')
      table.foreign('username').references('Users.username')
      table.foreign('following').references('Users.username')
      table.timestamps()
    })
  }

  down () {
    this.drop('followers')
  }

}

module.exports = FollowersTableSchema
