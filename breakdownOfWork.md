# Remindly
## H2 BCIT ACIT 2520 Reminder Application (School Project)
### All changes and commits were done on Raphael's computer because we didn't want to randomly mess up our code through any glitches.

### March 2nd

Raphael Eustaquio:

I worked on the following tasks:
1. Made changes in the login.ejs which added a 'POST' method and '/login' action inside the 'form' as well as changed the type and id, to 'email' and 'password'
   respectively as well as added a name called 'email' and 'password'. Another change is I added a middleware folder with the password.js file inside, as well as 
   change all the reminder functions to work with the current user instead of emily

### April 2nd

Raphael Eustaquio:

I worked on the following tasks:
1. Added a search user method in the userModel in the database.js file.
2. Created a new controller called friend_controller.js which will take care of the new functionality of adding friends etc. 
   First function created is the listFriends function.
3. Added a friends field in each of the user objects in the database.js
4. Added functionality to the reminders to have the ability to add subtasks, tags, and a reminder date. Changed all .ejs files associated with reminders, edited 
   the database.js file to make sure the reminders array has subtasks, tags, and reminder date. Finally, edited the reminder_controller.js file so that the create 
   and update functions can encorporate the new functionality.

Abell Rede:

I worked on the following tasks:
1. Edited the list function in the remindersController object in the reminder_controller.js file to also include the friends' reminders in the list.
2. Added a new nav item in the navbar.ejs which will send the user to the friends page.
3. Added the search.ejs file.
4. Added new routes for friends in the index.js file.
5. Added the add friend function to the friend_controller.js file.
6. Added a search user function in the friend_controller.js file.

Jake Choi:

I worked on the following tasks:
1. Added the list.ejs file which should list the friends of the user.
2. Added a new friends folder in the views folder for the .ejs files associated with the new friends page.
3. Fixed the reminder_controller.js file to work with logins


### April 3rd

Raphael Eustaquio:

I worked on the following tasks:
1. Changed the index.ejs file to have the same format if the task is set to 'complete'.
2. Added a checker to all the friend functions to check if there is a authenticated user, otherwise direct them back to the login page.

Jake Choi:

I worked on the following tasks:
1. Fixed the addFriend function in the friend_controller.js file to actually define user as well as properrly respond with redirecting the page back to the friends page.


### April 16th

Raphael Eustaquio:

I worked on the following tasks:
1. Removed the ability for the user to edit friend's reminders
2. Fixed the list function in the reminder_controller.js file to store individual data for each friend's reminders so that we can specifically create a 
   personalized header for each friend of the user. Also implemented the html code for this functionality in the index.ejs file
3. Removed some commented out code in index.js and changed the list function in the reminder_controller.js to provide separate lists for the user and friend reminders

Abell Rede:

I worked on the following tasks:
1. Changed the main reminder page to also follow the same styling where the subtasks and tags are badge like
2. Fixed the logout route

Jake Choi:

I worked on the following tasks:
1. Changed the design of the view page for the reminders to look cleaner as well as made the tags and subtasks have a badge look
2. Changed some of the .ejs files to fix some visuals
