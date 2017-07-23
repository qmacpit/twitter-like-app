// [
//   {
//     id: 1,
//     username: 'qmacpit',
//     followers: [
//       2, 3
//     ];
//   }
// ]

const userStore = [];

const getUserById = (id) => {
  return userStore.find((user) => user.id === id);
}

const getUserByUsername = (username) => {
  return userStore.find((user) => user.username === username);
}

const createUser = (username) => {
  const registeredUser = getUserByUsername(username);
  if (registeredUser) {
    throw new Error('user already registered');
  }
  const user = {
    username,
    id: userStore.length + 1,
    followers: []
  };
  userStore.push(user);
  return user;
}

const addFollower = (id, followerId) => {
  const user = getUserById(id);
  if (!user) {
    throw new Error('user not found');
  }
  const follower = getUserById(followerId);
  if (!follower) {
    throw new Error('follower not found');
  }
  user.followers.push(followerId);
}

module.exports = {
  getUserById, createUser, addFollower
};
