let userModel = require("../database").userModel;

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

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    console.log("----")
    console.log(typeof req.body.completed);
    let reminderToUpdate = req.params.id;
    let reminderIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToUpdate;
    });
    if (reminderIndex !== -1) {
      let updatedReminder = {
        id: database.cindy.reminders[reminderIndex].id,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed == "true",
      };
      database.cindy.reminders[reminderIndex] = updatedReminder;
    }
    res.redirect("/reminders");
},


  delete: (req, res) => {
    let reminderToDeleteIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == req.params.id;
    });
    if (reminderToDeleteIndex > -1) {
      database.cindy.reminders.splice(reminderToDeleteIndex, 1);
    }
    res.redirect("/reminders");
  },
};

module.exports = remindersController;
