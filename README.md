
# Vue-chat: Extra exercise for vue-js devmeeting
In this exercise you will create basic chat. You will use:
- VueJS
- Vuex
- VuexFire
- ES6/7
- ...and any extra library you wish to use

Any suggestions and opinions are welcome. Please let me know what was the problem for you and which exercise was the tough one. If you have your repo with solution, you can send me that. I will do a code review for you. My email address: krystian@fras.me

## Boilerplate
In this repo I created for you sample app connected with firebase. I really encourage you to generate app by yourself, but if you have any troubles, just clone the repo or copy files and:
1. Create your own firebase instance.
2. Go to `src/utils/db.refs.js` and change `config.databaseUrl` to your own URL.


## TODO
1. Connect app with your firebase (check above)
2. Writing messages (In case of any troubles, you can find it in this repo prev commits)
	- Create vuex module which connects with Firebase and adds new messages
	- Create layout with input, message list and anything else what you want
3. Extra messages attrs
	- Add information about user who sent the message (for now it can be just a username hardcoded or provided in an input)
	- Add feature for adding "likes" to messages (like on facebook)... We will unlike them later 
	- Add feature for adding picture to message
	- EXTRA: Figure out your own extra feature
4. User data
	- Create vuex module for storing user data
	- Add layout for changing user settings(it can be as a sidemenu or modal. Check lib http://element.eleme.io)
		- username
		- chat color
		- avatar
		- ... and etc
5. Persisted state
	 - Store user settings in localstorage to keep it after page refresh
	 - EXTRA: Store user settings in Firebase (pls do firstly the first point)
6. **ULTIMATE EXTRA:** Our app is almost ready. It's time for **finetuning**:
	- Likes - if post has likes, you should check if your user added one.
		- If he did, he should be able to **unlike** message.
		- If he didn't, he should be able to **like** message.
	- Some settings should be only user settings and some should be common for all users in chat
		- if you store user data in localstorage, let's add common settings to firebase.
		- If you store user data in firebase, let's split it to user settings and chat settings.
