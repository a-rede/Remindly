const database = [
    {
      id: 1,
      name: "Jimmy Smith",
      email: "jimmy123@gmail.com",
      password: "jimmy123!",
      reminders: [{
        id: 1,
        title: "something",
        description: "something",
        completed: false,
        subtasks: ["Subtask 1", "Subtask 2"],
        tags: ["tag1", "tag2"],
        reminderDate: "2023-04-10"
      }]
    },
    {
      id: 2,
      name: "Johnny Doe",
      email: "johnny123@gmail.com",
      password: "johnny123!",
      reminders: [{id: 1, title: "testing Johnny",
      description: "testing",
      completed: true,
      subtasks: ["Subtask 1", "Subtask 2"],
      tags: ["tag1", "tag2"],
      reminderDate: "2023-04-10"
    }]
    },
    {
      id: 3,
      name: "Jonathan Chen",
      email: "jonathan123@gmail.com",
      password: "jonathan123!",
      reminders: []
    },
  ];
  
  const userModel = {
    findOne: (email) => {
      const user = database.find((user) => user.email === email);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with email: ${email}`);
    },
    findById: (id) => {
      const user = database.find((user) => user.id === id);
      if (user) {
        return user;
      }
      throw new Error(`Couldn't find user with id: ${id}`);
    },
  };
  
  module.exports = { database, userModel };
  