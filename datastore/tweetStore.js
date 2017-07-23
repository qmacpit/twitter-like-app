// {
//   userId_1: [
//     {
//       datetime: 123214324,
//       data: 'tweet content'
//     }
//   ],
//   userId_2: [
//     {
//       datetime: 123214324,
//       data: 'tweet content'
//     }
//   ]
// }


const tweetStore = {};

const getTweets = (userId) => tweetStore[userId];
const createTweetSpace = (userId) => {
  tweetStore[userId] = [];
};
const createTweet = (userId, data) => {
  const tweetSpace = tweetStore[userId];
  if (!tweetSpace) {
    throw new Error('tweetSpace does not exist');
  }
  const tweet = {
    datetime: Date.now(),
    data
  };
  tweetStore[userId] = [].concat([{ tweet }], tweetSpace);
  return tweet;
};

module.exports = {
  getTweets, createTweetSpace, createTweet
};
