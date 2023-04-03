const { userModel } = require("../database");

const listFriends = (req, res) => {
    const user = userModel.findById(req.user.id);
    const friendData = user.friends.map((friendId) => userModel.findById(friendId));
    res.render("friends/list", { friends: friendData });
};

const searchUser = (req, res) => {
    const query = req.query.q;
    const users = query
    ? userModel.searchUser(query).filter((user) => user.id !== req.user.id)
    : [];
    res.render("friends/search", { users });
}

module.exports = { listFriends, searchUser, };