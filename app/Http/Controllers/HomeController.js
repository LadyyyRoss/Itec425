'use strict'

const User = use('App/Model/User')
const Follower = use('App/Model/Follower')
const Tweet = use('App/Model/Tweet')

class HomeController {
    * show (request, response) {

        yield response.sendView('welcome')
    }

    * home (request, response) {

        const users = yield User.all()
        const following = Follower.query().with('followers.username', request.currentUser).fetch()
        const tweets = yield Tweet.query().whereIn('username', following).fetch()

        yield response.sendView('welcome')

        }


    * follow(request, response) {
        const follower = new Follower()

        const username = request.currentUser
        const follow = request.name

        yield follower.save()


        yield response.sendView('register')

    }

    * post (request, response) {
        const tweet = new Tweet()

        tweet.content= request.input('exampleTextarea')
        tweet.username = request.currentUser

        yield tweet.save()

    }

}

module.exports = HomeController