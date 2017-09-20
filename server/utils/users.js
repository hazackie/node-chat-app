class Users {
	constructor () {
		this.users = [];
	}

	// Add new user to room
	addUser (id, name, room) {
		var user = {id, name, room};
		this.users.push(user);
		return user;
	}

	// Remove user by id
	removeUser (id) {
		var user = this.getUser(id);
		if (user) {
			this.users = this.users.filter((user) => user.id !== id);
		}

		return user;
	}

	// Get user by id
	getUser (id) {
		return this.users.filter((user) => user.id === id)[0];
	}

	// Get all users in a room
	getUserList (room) {
		var users = this.users.filter((user) => user.room === room);
		var namesArray = users.map((user) => user.name);

		return namesArray;
	}
}

module.exports = {Users};

// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getUserDescription () {
// 		return `${this.name} is ${this.age} year(s) old`;
// 	}
// }

// var me = new Person('Ha Hoang', 27);
// var description = me.getUserDescription();
// console.log(description);