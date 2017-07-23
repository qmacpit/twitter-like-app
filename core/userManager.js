const userStore = require('../datastore/userStore');

const createUser = (username) => userStore.createUser(username);
const addFollower = (userId, followerId) => userStore.addFollower(userId, followerId);

module.exports = {
  createUser, addFollower
};
