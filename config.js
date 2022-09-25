var config = {
	debug: false,
	database: {
		host: "enter_db_host",
		user: "enter_db_user",
		password: "enter_db_pass",
		database: "enter_db_name",
		charset : "utf8mb4"
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 