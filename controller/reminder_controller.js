let userModel = require("../database").userModel;
let database = require("../database")
let remindersController = {
  list: (req, res) => {
    const currentUser = req.user;
    if (!currentUser) {
      res.redirect("/login")
    } else {
      
      const user = userModel.findOne(currentUser.email)
      res.render("reminder/index", { reminders: user.reminders });
    }
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: async (req, res) => {
    const currentUser = req.user;
    if (!currentUser) {
      res.redirect("/login")
    } else {
      const user = await userModel.findOne(currentUser.email)
      let reminderToFind = req.params.id;
      let searchResult = user.reminders.find(function (reminder) {
        return reminder.id == reminderToFind;
      });
      if (searchResult != undefined) {
        res.render("reminder/single-reminder", { reminderItem: searchResult });
      } else {
        res.render("reminder/index", { reminders: user.reminders });
      }
    }
  },
  
  create: (req, res) => {
    const currentUser = req.user;
    if (!currentUser) {
      res.redirect("/login")
    } else {
      const user = userModel.findOne(currentUser.email)
      let reminder = {
        id: user.reminders.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
      };
      user.reminders.push(reminder);
      res.redirect("/reminders");
    }
  },

  edit: (req, res) => {
    const currentUser = req.user;
    if (!currentUser) {
      res.redirect("/login")
    } else {
      const user = userModel.findOne(currentUser.email)
      let reminderToFind = req.params.id;
      let searchResult = user.reminders.find(function (reminder) {
        return reminder.id == reminderToFind;
      });
      res.render("reminder/edit", { reminderItem: searchResult });
    }
  },

  update: (req, res) => {
    const currentUser = req.user;
    if (!currentUser) {
      res.redirect("/login")
    } else {
      const user = userModel.findOne(currentUser.email)
      let reminderToUpdate = req.params.id;
      let reminderIndex = user.reminders.findIndex(function (reminder) {
        return reminder.id == reminderToUpdate;
      });
      if (reminderIndex !== -1) {
        let updatedReminder = {
          id: user.reminders[reminderIndex].id,
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed == "true",
        };
        user.reminders[reminderIndex] = updatedReminder;
      }
      res.redirect("/reminders");
    }
},


  delete: (req, res) => {
    const currentUser = req.user;
    if (!currentUser) {
      res.redirect("/login")
    } else {
      const user = userModel.findOne(currentUser.email)
      let reminderToDeleteIndex = user.reminders.findIndex(function (reminder) {
        return reminder.id == req.params.id;
      });
      if (reminderToDeleteIndex > -1) {
        user.reminders.splice(reminderToDeleteIndex, 1);
      }
      res.redirect("/reminders");
    }
  },
};

module.exports = remindersController;
