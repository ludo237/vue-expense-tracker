package responses

import "gitlab.com/ludo237/vue-expense-tracker/models"

// ResourceResponse structure
type ResourceResponse struct {
	Response,
	Data models.Transaction `json:"data,omitempty"` // never empty ResponseError used instead
}
