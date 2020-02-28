package responses

// Response structure
type Response struct {
	ID      string `json:"id"`
	Status  int    `json:"status"`
	Message string `json:"message"`
}
