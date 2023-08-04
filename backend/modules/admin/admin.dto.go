package admin

type RegisterDTO struct {
	FullName string `json:"fullname" binding:"required,contains= "`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required,min=8,max=32"`
}

type RegisterUserRO struct {
	FullName string
	Email    string
}

type RegisterRO struct {
	Message string         `json:"message"`
	User    RegisterUserRO `json:"user"`
}

type LoginDTO struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required,min=8,max=32"`
}

type LoginRO struct {
	Message string `json:"message"`
	Token   string `json:"token"`
}
