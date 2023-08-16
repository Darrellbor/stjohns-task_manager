package errorhub

/*
# error

This is the structure of an error that would be sent back to the user
when errorhub is used
*/
type error struct {
	Method    string      `json:"method"`
	Path      string      `json:"path"`
	Code      int         `json:"code"`
	Timestamp string      `json:"timestamp"`
	Message   interface{} `json:"message"`
}

/*
# ErrorResponse

This is the structure that is prepared when a new errorhub is created and 
is what is the pointer to this that is passed around functions until it is finally 
executed.
*/
type ErrorResponse struct {
	Code    int
	Message interface{}
}
