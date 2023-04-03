const { userModel } = require("../database");

const listFriends = (req, res) => {
    const user = userModel.findById(req.user.id);
    const friendData = user.friends.map((friendId) => userModel.findById(friendId));
    res.render("friends/list", { friends: friendData });
};

module.exports = { listFriends }