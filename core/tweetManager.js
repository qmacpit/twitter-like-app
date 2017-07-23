const tweetStore = require('../datastore/tweetStore');
const userStore = require('../datastore/userStore');

const createTweet = (userId, tweet) => {
  if (tweet.length > 140) {
    throw new Error('sorry... your tweet is too long');
  }
  return tweetStore.createTweet(userId, tweet);
};
const sortTweets = tweets => tweets.sort((a, b) => a > b);
const getUserTweets = (userId) => tweetStore.getTweets(userId);
const createTweetSpace = (userId) => tweetStore.createTweetSpace(userId)
const getTimeline = (userId) => {
  const user = userStore.getUserById(userId);
  if (!user) {
    throw new Error('cannot generate time for non existing user');
  }
  const { followers } = user;
  const tweets = followers.reduce((tweets, followerId) => {
    return [].concat(tweets, getUserTweets(followerId));
  }, []);

  return sortTweets(tweets);
};

module.exports = {
  createTweet, getUserTweets, createTweetSpace, getTimeline
};
