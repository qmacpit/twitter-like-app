const { addFollower, createUser,  } = require('../core/userManager');
const { getUserTweets, createTweetSpace, getTimeline, createTweet } = require('../core/tweetManager');
const { prepareRequestHandler } = require('./apiUtils');

module.exports = (app) => {

  /**
   * Allows registering a new user
   * PARAMS:
   * BODY:
   *  username - new user username
   */
  app.put(
    '/user',
    prepareRequestHandler((req) => {
      const username = req.body.username;
      const user = createUser(username);
      createTweetSpace(user.id);
      return user;
    })
  );

  /**
   * Allows following a user
   * PARAMS:
   *  id - user id
   * BODY:
   *  id - follower id
   */
  app.post(
    '/user/:id/follow',
    prepareRequestHandler((req) => {
      const followerId = parseInt(req.body.id);
      const userId = parseInt(req.params.id);
      addFollower(userId, followerId);
    })
  );

  /**
   * Allows access user timeline
   * PARAMS:
   *  id - user id
   */
  app.get(
    '/user/:id/timeline',
    prepareRequestHandler((req) => getTimeline(parseInt(req.params.id)))
  );

  /**
   * Allows access user wall
   * PARAMS:
   *  id - user id
   */
  app.get(
    '/user/:id/wall',
    prepareRequestHandler((req) => getUserTweets(req.params.id))
  );

  /**
   * Allows posting tweet
   * PARAMS:
   *  id - user id
   * BODY:
   *  data - tweet content
   */
  app.put(
    '/user/:id/tweet',
    prepareRequestHandler((req) => {
      const { data } = req.body;
      const id = parseInt(req.params.id);
      return createTweet(id, data);
    })
  );

};