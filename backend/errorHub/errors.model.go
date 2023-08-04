package errorhub

type error struct {
	Method    string `json:"method"`
	Path      string `json:"path"`
	Code      int `json:"code"`
	Timestamp string `json:"timestamp"`
	Message   interface{} `json:"message"`
}

type ErrorResponse struct {
	Code    int
	Message interface{}
}
