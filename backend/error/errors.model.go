package error

type Error struct {
	Method    string
	Path      string
	Code      int
	timestamp string
	Message   interface{}
}

type ErrorResponse struct {
	Code    int
	Message interface{}
}
