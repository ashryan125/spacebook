const { User, Thought } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // get user by id
  getUserById({ params }, res) {
    console.log(params);
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        // if no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // create a user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // add a friend
  addFriend({ params }, res) {
    console.log(params);
    // add new friend to user's list
    User.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        // add user as a friend to friend's friend list
        User.findOneAndUpdate(
          { _id: params.friendId },
          { $addToSet: { friends: params.id } },
          { new: true }
        )
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No friend found with this id" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  },

  // update a user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // delete a friend
  removeFriend({ params }, res) {
    // remove friend from user's list
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        // remove user from friend's list
        User.findOneAndUpdate(
          { _id: params.friendId },
          { $pull: { friends: params.id } },
          { new: true }
        )
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No friend found with this id" });
              return;
            }
            res.json({ message: "Removed friend!" });
          })
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  },

  // delete a user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })

      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
      })

      .then(() => {
        Thought.deleteMany({ username: dbUserData.username }).then(() => {
        });
      })

      .catch((err) => {
        res
        .status(404)
        .json({ message: "User deleted! Refresh GET all users" });
      });
  },
};

module.exports = userController;
