package admin

/*
# RegisterDTO

This is the data transfer object for registration
that is simply the fields that are expected to handle registration
*/
type RegisterDTO struct {
	FullName string `json:"fullName" binding:"required,contains= "`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=8,max=32"`
}

/*
# RegisterUserRO

This is the response object for registration user object
that is simply the fields that are expected from registration 
user object
*/
type RegisterUserRO struct {
	FullName string
	Email    string
}

/*
# RegisterRO

This is the response object for registration
that is simply the fields that are expected from registration or 
simply the data that is returned to the user after registration
*/
type RegisterRO struct {
	Message string         `json:"message"`
	User    RegisterUserRO `json:"user"`
}

/*
# LoginDTO

This is the data transfer object for login
that is simply the fields that are expected to handle login
*/
type LoginDTO struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=8,max=32"`
}

/*
# LoginRO

This is the response object for login
that is simply the fields that are expected from login or 
simply the data that is returned to the user after login
*/
type LoginRO struct {
	Message string `json:"message"`
	Token   string `json:"token"`
}

/*
# AdminUsersRO

This is the response object for fetching admin users
that is simply the fields that are expected from FetchAdminUsers or 
simply the data that is returned to the user after FetchAdminUsers
*/
type AdminUsersRO struct {
	FullName       string `json:"fullName"`
	Email          string `json:"email"`
	IsLoggedInUser bool   `json:"isLoggedInUser"`
}
