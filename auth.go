package api

import (
	"PROJET_FORUM/token"
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"golang.org/x/crypto/bcrypt"
)

// Register
func Register(username string, email string, repeatEmail string, pass string, repeatPass string) (string, bool) {
	db, err := sql.Open("sqlite3", "forrhum.db")
	CheckErr(err)

	valid := Validation(
		[]ValidationUser{
			{Value: username, Valid: "username"},
			{Value: email, Valid: "email"},
			{Value: repeatEmail, Valid: "repeatEmail"},
			{Value: pass, Valid: "password"},
			{Value: repeatPass, Valid: "repeatPassword"},
		})

	// insert
	if valid {
		stmt, err1 := db.Prepare("INSERT INTO userdatabase(username, email, password) values( ?, ?, ?)")
		CheckErr(err1)
		hashedPassword := HashedPassword([]byte(pass))

		res, err2 := stmt.Exec(username, email, hashedPassword)
		CheckErr(err2)
		id, err3 := res.LastInsertId()
		CheckErr(err3)
		fmt.Println(id)
		return "work well", true
	}
	return "dont work, bad information ", false

}

func Login(username string, pass string) (string, error) {
	// Add validation to login
	db, err := sql.Open("sqlite3", "forrhum.db")
	CheckErr(err)
	if similarUsername(username) == true {
		rows, err := db.Query(`SELECT password, username FROM userdatabase WHERE username = ?`, username)
		CheckErr(err)
		var password string
		var usernameToken string
		if rows.Next() {
			err4 := rows.Scan(&password, &usernameToken)
			CheckErr(err4)
			err2 := bcrypt.CompareHashAndPassword([]byte(password), []byte(pass))
			if err2 == nil {
				return token.CreateToken(usernameToken)
			}
		}
	}
	return "unsuccessfully", nil
}

func similarUsername(username string) bool {
	db, err := sql.Open("sqlite3", "forrhum.db")
	CheckErr(err)
	rows, err := db.Query(`SELECT * FROM userdatabase WHERE username == ?`, username)
	CheckErr(err)
	if rows.Next() {
		return true
	}
	return false
}