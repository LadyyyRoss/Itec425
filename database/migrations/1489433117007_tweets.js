'use strict'

const Schema = use('Schema')

class TweetsTableSchema extends Schema {

  up () {
    this.create('tweets', (table) => {
      table.string('username')
      table.foreign('username').references('Users.username')
      table.increments('tweetID')
    table.text('content')
    table.timestamps()
  })
  }


  down () {
    this.drop('tweets')
  }

}

module.exports = TweetsTableSchema
